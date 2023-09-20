pipeline {
    agent any
    
    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.team-grit.yaml'
    }

    stages {
        stage('Install dependencies') {
            steps {
                checkout scm
                sh " sudo chmod +x docker.sh && ./docker.sh "
            }
        }
        stage('build frontend') {
            steps {
                checkout scm
                sh " docker-compose -f ${DOCKER_COMPOSE-FILE} build"
            }
        }
        stage('deploy frontend') {
            steps {
                checkout scm
                sh " docker-compose -f ${DOCKER_COMPOSE-FILE} up -d"
            }
        }
    }
}