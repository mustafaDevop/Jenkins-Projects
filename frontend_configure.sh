#!/bin/bash

# Function to get the public IP address of the backend server
get_backend_ip() {
    local workflow_id="$1"
    local backend_ip

    backend_ip=$(aws ec2 describe-instances \
        --filters "Name=tag:Name,Values=backend-${workflow_id:0:7}" \
        --query "Reservations[*].Instances[*].PublicIpAddress" \
        --output text)
    
    echo "$backend_ip"
}

# Function to set the API_URL and update the .env file
set_api_url() {
    local backend_ip="$1"
    
    local api_url="http://${backend_ip}:3030"
    echo "API_URL=\"$api_url\"" > frontend/.env
}

# Main script
if [ -z "$CIRCLE_WORKFLOW_ID" ]; then
    echo "ERROR: CIRCLE_WORKFLOW_ID is not set."
    exit 1
fi

backend_ip=$(get_backend_ip "$CIRCLE_WORKFLOW_ID")
api_url=$(set_api_url "$backend_ip")

echo "Backend IP: $backend_ip"
echo "API URL: $api_url"
