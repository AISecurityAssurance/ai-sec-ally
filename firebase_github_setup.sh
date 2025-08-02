#!/bin/bash

# Firebase GitHub Actions Service Account Setup Script
# This script creates a service account for GitHub Actions to deploy to Firebase

set -e  # Exit on any error

# Configuration variables
PROJECT_ID="active-tome-467816-s6"
SERVICE_ACCOUNT_NAME="github-action-1025222256"
SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
SERVICE_ACCOUNT_DISPLAY_NAME="GitHub Actions Firebase Deployment"
KEY_FILE="github-actions-key.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Firebase GitHub Actions Service Account Setup ===${NC}"
echo -e "Project ID: ${PROJECT_ID}"
echo -e "Service Account: ${SERVICE_ACCOUNT_EMAIL}"
echo ""

# Function to check if gcloud is installed and authenticated
check_prerequisites() {
    echo -e "${YELLOW}Checking prerequisites...${NC}"
    
    # Check if gcloud is installed
    if ! command -v gcloud &> /dev/null; then
        echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
        echo "Please install it from: https://cloud.google.com/sdk/docs/install"
        exit 1
    fi
    
    # Check if user is authenticated
    if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
        echo -e "${RED}Error: No active gcloud authentication found.${NC}"
        echo "Please run: gcloud auth login"
        exit 1
    fi
    
    # Set the project
    echo "Setting project to ${PROJECT_ID}..."
    gcloud config set project "${PROJECT_ID}"
    
    echo -e "${GREEN}Prerequisites check passed!${NC}"
    echo ""
}

# Function to enable required APIs
enable_apis() {
    echo -e "${YELLOW}Enabling required APIs...${NC}"
    
    local apis=(
        "iam.googleapis.com"
        "firebase.googleapis.com" 
        "firebasehosting.googleapis.com"
        "cloudbuild.googleapis.com"
        "storage.googleapis.com"
    )
    
    for api in "${apis[@]}"; do
        echo "Enabling ${api}..."
        gcloud services enable "${api}" --quiet
    done
    
    echo -e "${GREEN}APIs enabled successfully!${NC}"
    echo ""
}

# Function to create service account
create_service_account() {
    echo -e "${YELLOW}Creating service account...${NC}"
    
    # Check if service account already exists
    if gcloud iam service-accounts describe "${SERVICE_ACCOUNT_EMAIL}" &>/dev/null; then
        echo -e "${YELLOW}Service account ${SERVICE_ACCOUNT_EMAIL} already exists. Skipping creation.${NC}"
    else
        echo "Creating service account: ${SERVICE_ACCOUNT_EMAIL}"
        gcloud iam service-accounts create "${SERVICE_ACCOUNT_NAME}" \
            --display-name="${SERVICE_ACCOUNT_DISPLAY_NAME}" \
            --description="Service account for GitHub Actions to deploy to Firebase"
        echo -e "${GREEN}Service account created successfully!${NC}"
    fi
    echo ""
}

# Function to assign roles to service account
assign_roles() {
    echo -e "${YELLOW}Assigning roles to service account...${NC}"
    
    local roles=(
        "roles/firebase.admin"
        "roles/firebasehosting.admin"
        "roles/iam.serviceAccountUser"
        "roles/cloudbuild.builds.editor"
        "roles/storage.objectAdmin"
        "roles/cloudfunctions.developer"
        "roles/datastore.user"
    )
    
    for role in "${roles[@]}"; do
        echo "Assigning role: ${role}"
        gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
            --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
            --role="${role}" \
            --quiet
    done
    
    echo -e "${GREEN}Roles assigned successfully!${NC}"
    echo ""
}

# Function to create and download service account key
create_key() {
    echo -e "${YELLOW}Creating service account key...${NC}"
    
    if [[ -f "${KEY_FILE}" ]]; then
        echo -e "${YELLOW}Key file ${KEY_FILE} already exists.${NC}"
        read -p "Do you want to create a new key? (y/N): " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Skipping key creation."
            return 0
        fi
        echo "Backing up existing key to ${KEY_FILE}.bak"
        mv "${KEY_FILE}" "${KEY_FILE}.bak"
    fi
    
    echo "Creating and downloading key to ${KEY_FILE}..."
    gcloud iam service-accounts keys create "${KEY_FILE}" \
        --iam-account="${SERVICE_ACCOUNT_EMAIL}"
    
    echo -e "${GREEN}Service account key created: ${KEY_FILE}${NC}"
    echo ""
}

# Function to display setup instructions
display_instructions() {
    echo -e "${BLUE}=== Setup Complete! ===${NC}"
    echo ""
    echo -e "${GREEN}Next Steps:${NC}"
    echo ""
    echo "1. Add the service account key to GitHub Secrets:"
    echo "   - Go to your GitHub repository"
    echo "   - Navigate to Settings > Secrets and variables > Actions"
    echo "   - Click 'New repository secret'"
    echo "   - Name: FIREBASE_SERVICE_ACCOUNT"
    echo "   - Value: Copy the entire contents of ${KEY_FILE}"
    echo ""
    echo "2. Example GitHub Actions workflow (.github/workflows/deploy.yml):"
    echo ""
    cat << 'EOF'
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-firebase-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: active-tome-467816-s6
EOF
    echo ""
    echo -e "${YELLOW}Security Note:${NC}"
    echo "- Store the ${KEY_FILE} securely and delete it from your local machine after adding to GitHub"
    echo "- Consider using Workload Identity Federation for enhanced security"
    echo "- Regularly rotate service account keys"
    echo ""
}

# Function to cleanup
cleanup() {
    echo -e "${YELLOW}Cleaning up...${NC}"
    
    read -p "Do you want to delete the local key file ${KEY_FILE}? (y/N): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -f "${KEY_FILE}"
        echo "Local key file deleted."
    else
        echo -e "${YELLOW}Remember to securely delete ${KEY_FILE} after adding it to GitHub Secrets!${NC}"
    fi
}

# Main execution
main() {
    check_prerequisites
    enable_apis
    create_service_account
    assign_roles
    create_key
    display_instructions
    cleanup
    
    echo -e "${GREEN}🎉 GitHub Actions Firebase deployment setup complete!${NC}"
}

# Run the script
main "$@"