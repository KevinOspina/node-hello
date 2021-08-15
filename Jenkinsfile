pipeline {
    agent any

    stages {
         stage('CHeckout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master'], [name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '3c64eac4-ac7a-47d5-849c-f7c5221c6484', url: 'https://github.com/KevinOspina/node-hello']]])
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}