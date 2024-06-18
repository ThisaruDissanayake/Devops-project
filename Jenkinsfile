pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ThisaruDissanayake/Devops-project.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build('mern-backend', './backend')
                    docker.build('mern-frontend', './frontend')
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d --build'
            }
        }
    }
}
