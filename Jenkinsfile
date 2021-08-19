pipeline {
    agent 
    enviroment{
    DOCKERHUB_CREDENTIALS= credentials('kevinospina-dockerhub')
    }
    stages {
         stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], browser: [$class: 'GithubWeb', repoUrl: 'https://github.com/KevinOspina/node-hello.git'], extensions: [], userRemoteConfigs: [[credentialsId: '261d6b1d-4e0d-45f1-96b2-eae3ea36e052', url: 'https://github.com/KevinOspina/node-hello.git']]])
            }
        }
        
        stage('Build'){
            steps{
                 sh 'docker build -t kevinospina03/node_hello:latest'
            }
        }
        
        stage('Login'){
            steps{
                 sh '''
                     echo "${PASS} | docker login -u ${USER} --password-stdin"
                 '''
            }
        }
        
        stage('Push'){
            steps{
                 sh 'docker push kevinospina03/node_hello:latest'
            }
        }
        
        
        stage('Deploy') {
            steps {
               
                 withCredentials([usernamePassword(credentialsId: '37267417-47b3-42ac-9844-3f307ddb9306', passwordVariable: 'password', usernameVariable: 'username')]){
                    /**
                    * Restart docker server
                    **/
                    sh '''
                        echo "${PASS} | docker login -u ${USER} --password-stdin"
                        docker stop node_hello
                        docker rm node_hello
                        docker pull kevinospina03/node_hello:latest
                        docker run -d -p 3000:3000 --name node_hello -t kevinospina03/node_hello:latest
                    '''
                }
            }
        
        }
    }
    post {
        always {
            sh 'docker logout'
        }

    }

}
