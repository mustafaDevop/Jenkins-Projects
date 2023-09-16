#!/bin/bash

# Get the public IP address of the Jenkins server
DEPLOY_SERVER=$(curl -s http://checkip.amazonaws.com)

# Create a grouped inventory file with the Jenkins IP address
echo "[Web]" > ~/home/ubuntu/jenkins&circleci/.circleci/ansible/inventory.txt
echo "${JENKINS_PUBLIC_IP}" >> ~/home/ubuntu/jenkins&circleci/.circleci/ansible/inventory.txt

# Display the contents of the inventory file
cat ~/home/ubuntu/jenkins&circleci/.circleci/ansible/inventory.txt