pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.jenkins.yaml'
        EC2_INSTANCE_IP = '3.78.216.92'
        CONTAINER_NAME = 'test'
        EC2_USER = 'ubuntu'
        SSH_CREDENTIALS = 'jenkins.pem'
        ARCHIVE_PATH = "${WORKSPACE}"

        DEST_EC2_INSTANCE_IP = '52.59.203.34'
        DEST_EC2_USER = 'ubuntu'
        DEST_FILE_PATH = '/home/ubuntu/'

        SSH_CREDENTIALS_DEST = 'ubuntu'
    }

    stages {
        stage('Build') {
            steps {
                // Checkout source code from version control system
                checkout scm

                // Build your application using Docker Compose
                sh "docker-compose -f $DOCKER_COMPOSE_FILE build"

                // Archive the workspace for deployment
                archiveArtifacts artifacts: '**', fingerprint: true, allowEmptyArchive: true, defaultExcludes: false, caseSensitive: true, followSymlinks: true

                // Display the archive path
                echo "Archived artifacts path: ${ARCHIVE_PATH}"
            }
        }

        stage('Transfer Archive') {
            steps {
                // Transfer the archive workspace from the Jenkins EC2 server to the destination EC2 server
                withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS, keyFileVariable: 'KEY_FILE_SOURCE'),
                                 sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_DEST, keyFileVariable: 'KEY_FILE_DEST')]) {
                    sshagent(credentials: [SSH_CREDENTIALS, SSH_CREDENTIALS_DEST]) {
                        // Delete the old copied file on the destination EC2 server
                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${DEST_EC2_USER}@${DEST_EC2_INSTANCE_IP} " rm -rf ${DEST_FILE_PATH}${CONTAINER_NAME}"')
                        // Delete old container on the destination EC2 server
                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${DEST_EC2_USER}@${DEST_EC2_INSTANCE_IP} "cd ${DEST_FILE_PATH} && docker rm -f \$(docker ps -aq)\"')
                        // Copy the cached workspace from the Jenkins EC2 server to the destination EC2 server
                        sh ('scp -o StrictHostKeyChecking=no -i ${KEY_FILE_SOURCE} -r ${ARCHIVE_PATH} ${DEST_EC2_USER}@${DEST_EC2_INSTANCE_IP}:${DEST_FILE_PATH}')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // SSH into the destination EC2 server and deploy the application using Docker Compose
                withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_DEST, keyFileVariable: 'KEY_FILE_DEST')]) {
                    sshagent(credentials: [SSH_CREDENTIALS_DEST]) {
                        // Change directory to the deployed folder and deploy the application using Docker Compose
                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${DEST_EC2_USER}@${DEST_EC2_INSTANCE_IP} "cd ${DEST_FILE_PATH}${CONTAINER_NAME} && docker-compose -f ${DOCKER_COMPOSE_FILE} build && docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"')
                    }
                }
            }
        }
        stage ('Clean up') {
            steps {
                // clean up docker images
                sh "docker images -q | xargs docker rmi --force"
            }
        }      
    }
}
