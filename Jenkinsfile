pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "your-docker-registry"  // Replace with your Docker registry URL if needed
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ThisaruDissanayake/Devops-project.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    def dockerImageBackend = docker.build("${DOCKER_REGISTRY}/mern-backend", './backend')
                    def dockerImageFrontend = docker.build("${DOCKER_REGISTRY}/mern-frontend", './frontend')
                    
                    dockerImageBackend.push()
                    dockerImageFrontend.push()
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry('', 'docker-credentials-id') {
                        bat 'docker-compose down'
                        bat 'docker-compose up -d --build'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
