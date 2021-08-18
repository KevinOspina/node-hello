pipeline {
    agent any

    stages {
         stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], browser: [$class: 'GithubWeb', repoUrl: 'https://github.com/KevinOspina/node-hello.git'], extensions: [], userRemoteConfigs: [[credentialsId: '261d6b1d-4e0d-45f1-96b2-eae3ea36e052', url: 'https://github.com/KevinOspina/node-hello.git']]])
            }
        }
        
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'docker login -u kevinospina03 -p nacional3'
                sh 'docker build .'
                sj 'docker push kevinospina03/node_hello'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                sh 'docker run kevinospina03/node_hello'
                
            }
            
        }
    }
}
