pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Run Playwright Tests') {
            agent {
                docker {
                    image '://microsoft.com'
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
                sh 'npx playwright test'
            }
        }
    }
}
