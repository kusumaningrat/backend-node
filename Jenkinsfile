pipeline {

  environment {
      dockerimagename = "kusumaningrat16/backend-node"
      dockerImage = ""
  }
  
  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git credentialsId: 'gitauth', url: 'https://github.com/Kusuma16/backend-node'
      }
    }

    stage('Buil Image') {
      steps {
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
        registryCredential = 'dockerhublogin'
      }
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      withKubeConfig([namespace: 'default', 
                      caCertificate: 'certificates'])
    }
  }
}