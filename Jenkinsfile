pipeline {
    agent any

    environment {
         env.REMOTE_SERVER_IP = scriptOutput
         env.REMOTE_USER = 'ubuntu'
         ARCHIVE_PATH = "${WORKSPACE}"
         SSH_CREDENTIALS = 'jenkins'
         CONTAINER_NAME = 'jenkins&circleci'
         
         SSH_CREDENTIALS_DEST = 'ubuntu'
         DEST_FILE_PATH = '/home/ubuntu'
    }

    stages {
        stage('Install dependencies') {
            steps {
                checkout scm
                sh " sudo chmod +x install.sh $$ ./install.sh"
                    
            }
        }

        stage('Build Backend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the backend
                dir('backend') {
                    def cacheKey = 'backend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the backend directory
                    sh "cd backend"
                    
                    // Install backend dependencies and build
                    sh "npm i"
                    sh "npm run build"
                    
                    // Save npm cache for the backend
                    cache(config: [key: cacheKey, paths: cachePaths])
                }
            }
        }

        stage('Build Frontend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the frontend
                dir('frontend') {
                    def cacheKey = 'frontend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the frontend directory
                    sh "cd frontend"
                    
                    // Install frontend dependencies and build
                    sh "npm i"
                    sh "npm run build"
                    
                    // Save npm cache for the frontend
                    cache(config: [key: cacheKey, paths: cachePaths])
                }
            }
        }

        stage('Test Backend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the backend
                dir('backend') {
                    def cacheKey = 'backend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the backend directory
                    sh "cd backend"
                    
                    // Install backend dependencies and run tests
                    sh "npm install"
                    sh "npm run test"
                }
            }
        }

        stage('Test Frontend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the frontend
                dir('frontend') {
                    def cacheKey = 'frontend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the frontend directory
                    sh "cd frontend"
                    
                    // Install frontend dependencies and run tests
                    sh "npm install"
                    sh "npm run test"
                }
            }
        }

        stage('Scan Frontend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the frontend
                dir('frontend') {
                    def cacheKey = 'frontend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the frontend directory
                    sh "cd frontend"
                    
                    // Install frontend dependencies, run audit, and fix critical vulnerabilities
                    sh "npm install"
                    sh "npm audit fix --audit-level=critical --force"
                }
            }
        }

        stage('Scan Backend') {
            steps {
                checkout scm // Checkout the source code
                
                // Restore npm cache if available for the backend
                dir('backend') {
                    def cacheKey = 'backend-build'
                    def cachePaths = [
                        '**/node_modules',
                        '**/package-lock.json',
                        '**/yarn.lock',
                    ]

                    // Try to restore cache, but continue if it fails
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        cache(config: [key: cacheKey, paths: cachePaths])
                    }

                    // Change to the backend directory
                    sh "cd backend"
                    
                    // Install backend dependencies, run audit, and fix vulnerabilities
                    sh "npm install"
                    sh "npm audit fix --audit-level=critical --force"
                    sh "npm audit fix --force"
                    
                    // Perform a critical audit
                    sh "npm audit --audit-level=critical"
                }
            }
        }

        stage('Deploy Infrastructure') {
            steps {
                checkout scm // Checkout the source code
                
                // Change to the .circleci/files directory
                dir('.circleci/files') {
                    
                    // Deploy backend infrastructure
                    sh """
                    aws cloudformation deploy \\
                      --template-file backend.yml \\
                      --stack-name "udapeople-Backend-\${CIRCLE_WORKFLOW_ID:0:7}" \\
                      --tags project=udapeople \\
                      --parameter-overrides ID="\${CIRCLE_WORKFLOW_ID:0:7}"
                    """
                    
                    // Deploy frontend infrastructure
                    sh """
                    aws cloudformation deploy \\
                      --template-file frontend.yml \\
                      --tags project=udapeople \\
                      --stack-name "udapeople-frontend-\${CIRCLE_WORKFLOW_ID:0:7}" \\
                      --parameter-overrides ID="\${CIRCLE_WORKFLOW_ID:0:7}"
                    """
                }
            }
        }

        stage('Set Environment Variables') {
            steps {
                script {
                    // Execute the AWS CLI command to get the public IP address
                    def scriptOutput = sh(script: """
                        aws ec2 describe-instances \\
                          --query "Reservations[*].Instances[*].PublicIpAddress" \\
                          --filters "Name=tag:Name,Values=backend-\${CIRCLE_WORKFLOW_ID:0:7}" \\
                          --output text
                    """, returnStdout: true).trim()
                                
                }
            }
        }

        stage('Archive code') {
            steps {
                checkout scm
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

                        // Copy the cached workspace from the Jenkins EC2 server to the destination EC2 server
                        sh ('scp -o StrictHostKeyChecking=no -i ${KEY_FILE_SOURCE} -r ${ARCHIVE_PATH} ${env.REMOTE_USER}@${env.REMOTE_SERVER_IP}:${DEST_FILE_PATH}')
                    }
                }
            }
        }
        stage('Configure infrastructure') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS, keyFileVariable: 'KEY_FILE_SOURCE'),
                                 sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_DEST, keyFileVariable: 'KEY_FILE_DEST')]) {
                    sshagent(credentials: [SSH_CREDENTIALS, SSH_CREDENTIALS_DEST]) {

                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${env.REMOTE_USER}@${env.REMOTE_SERVER_IP} "cd ${DEST_FILE_PATH}${CONTAINER_NAME} && chmod +x ansible.sh && ./ansible.sh "')
                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${env.REMOTE_USER}@${env.REMOTE_SERVER_IP} "cd ${DEST_FILE_PATH}${CONTAINER_NAME} && chmod +x ipCheck.sh && ./ipCheck.sh"')
                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${env.REMOTE_USER}@${env.REMOTE_SERVER_IP}"cd ${DEST_FILE_PATH}${CONTAINER_NAME} && cd .circleci/ansible && ansible-playbook -i inventory.txt configure-server.yml"')
                    }
                }
            }
        }
        stage('Deploy-frontend') {
            steps {
                checkout scm
                // get backend url
                sh "chmod +x frontend_configure.sh && ./frontend_configure.sh"
                // deploy frontend objects
                dir('frontend') {
                    // Change to the 'frontend' directory
                    script {
                        // Install Node.js dependencies
                        sh 'npm install'
                        
                        // Build the frontend application
                        sh 'npm run build'
                        
                        // Create a compressed tarball of the 'dist' directory
                        sh 'tar -czvf artifact-"${CIRCLE_WORKFLOW_ID:0:7}".tar.gz dist'
                        
                        // Copy 'dist' directory to AWS S3 bucket
                        sh 'aws s3 cp dist s3://udapeople-${CIRCLE_WORKFLOW_ID:0:7} --recursive'
                    }
                }
            }
        }
        stage('Deploy-backend') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS, keyFileVariable: 'KEY_FILE_SOURCE'),
                                 sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_DEST, keyFileVariable: 'KEY_FILE_DEST')]) {
                    sshagent(credentials: [SSH_CREDENTIALS, SSH_CREDENTIALS_DEST]) {

                        sh('ssh -o StrictHostKeyChecking=no -i ${KEY_FILE_DEST} ${env.REMOTE_USER}@${env.REMOTE_SERVER_IP} "cd ${DEST_FILE_PATH}${CONTAINER_NAME} cd backend && npm i && npm build && cd .. && tar -C backend -czvf artifact.tar.gz . && cd .circleci/ansible && echo "Content of the inventory.txt file is -------" && cat inventory.txt && printenv | grep TYPEORM_ && ansible-playbook -i  inventory.txt deploy-bakend.yml')

                    }
                }
            }
        }
//       stage('Smoke-test') {
//           steps {
//
//           }
//        }
        stage('Cloudfront-update') {
            steps {
                checkout scm
                sh"""
                aws cloudformation deploy \
                --template-file .circleci/files/cloudfront.yml \
                --stack-name InitialStack \
                --parameter-overrides WorkflowID="udapeople-${CIRCLE_WORKFLOW_ID:0:7}" \
                --tags project=udapeople \
                """
            }
        }
        stage('CleanUp') {
            steps {
                checkout scm
                sh """
                export OldWorkflowID=$(aws cloudformation \
            list-exports --query "Exports[?Name==\`WorkflowID\`].Value" \
            --no-paginate --output text)
            echo OldWorkflowID: "${OldWorkflowID}"
            echo CIRCLE_WORKFLOW_ID "${CIRCLE_WORKFLOW_ID:0:7}"  
            export STACKS=($(aws cloudformation list-stacks --query "StackSummaries[*].StackName" \
              --stack-status-filter CREATE_COMPLETE --no-paginate --output text))
            echo Stack names: "${STACKS[@]}"
            echo OldWorkflowID: "${OldWorkflowID}"
            echo CIRCLE_WORKFLOW_ID "${CIRCLE_WORKFLOW_ID:0:7}"
            echo Stack names: "${STACKS[@]}"
            if [[ "${STACKS[@]}" =~ "${OldWorkflowID}" ]]
            then
              aws s3 rm "s3://udapeople-${OldWorkflowID}" --recursive
              aws cloudformation delete-stack --stack-name "udapeople-backend-${OldWorkflowID}"
              aws cloudformation delete-stack --stack-name "udapeople-frontend-${OldWorkflowID}"
            fi
            """
            }
        }
    }
    post {
        failure {
            // Send a Slack notification on failure
            slackSend(channel: 'mustafadevop', color: 'danger', message: "Job failed in Jenkins: Job '${currentBuild.fullDisplayName}'")
        }
    }
}
