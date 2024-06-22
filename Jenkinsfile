pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maleeshaNode'
        DOCKER_TAG = 'latest'
        DOCKER_REPO = 'mitd0011/devproject'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ThisaruDissanayake/Devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_REPO}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                    }
                    sh "docker push ${DOCKER_REPO}:${DOCKER_TAG}"
                }
            }
        }
    }

}