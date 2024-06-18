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
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }
    }
}
