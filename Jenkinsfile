pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'hashithNode'
        DOCKER_TAG = 'latest'
        DOCKER_REPO = 'hashith/node_devops'
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
                    sh "docker build -t ${mitd0011/devproject}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                    }
                    sh "docker push ${mitd0011/devproject}:${DOCKER_TAG}"
                }
            }
        }
    }

}