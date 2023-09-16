#!/bin/bash

# Update package lists
sudo apt-get update

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install AWS CLI
sudo apt-get install -y awscli

# Verify installations
node -v
npm -v
aws --version
