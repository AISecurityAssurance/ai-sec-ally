#!/bin/bash

# Firebase Configuration Verification Script
# This script checks your Firebase setup and provides recommendations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Firebase Configuration Check ===${NC}"
echo ""

# Check if firebase.json exists
check_firebase_json() {
    echo -e "${YELLOW}Checking firebase.json...${NC}"
    
    if [[ -f "firebase.json" ]]; then
        echo -e "${GREEN}✓ firebase.json found${NC}"
        echo "Content preview:"
        cat firebase.json | head -20
        echo ""
        
        # Check if hosting is configured
        if grep -q '"hosting"' firebase.json; then
            echo -e "${GREEN}✓ Hosting configuration found${NC}"
        else
            echo -e "${RED}✗ No hosting configuration found in firebase.json${NC}"
            echo "You may need to run: firebase init hosting"
        fi
    else
        echo -e "${RED}✗ firebase.json not found${NC}"
        echo "Please run: firebase init"
        return 1
    fi
    echo ""
}

# Check if .firebaserc exists
check_firebaserc() {
    echo -e "${YELLOW}Checking .firebaserc...${NC}"
    
    if [[ -f ".firebaserc" ]]; then
        echo -e "${GREEN}✓ .firebaserc found${NC}"
        echo "Content:"
        cat .firebaserc
        
        # Verify project ID
        if grep -q "active-tome-467816-s6" .firebaserc; then
            echo -e "${GREEN}✓ Correct project ID found${NC}"
        else
            echo -e "${YELLOW}⚠ Project ID may not match expected: active-tome-467816-s6${NC}"
        fi
    else
        echo -e "${RED}✗ .firebaserc not found${NC}"
        echo "Please run: firebase use --add active-tome-467816-s6"
        return 1
    fi
    echo ""
}

# Check build directory
check_build_directory() {
    echo -e "${YELLOW}Checking build setup...${NC}"
    
    # Check package.json for build script
    if [[ -f "package.json" ]]; then
        if grep -q '"build"' package.json; then
            echo -e "${GREEN}✓ Build script found in package.json${NC}"
            echo "Build script:"
            grep -A 1 '"build"' package.json
        else
            echo -e "${RED}✗ No build script found in package.json${NC}"
        fi
    fi
    
    # Check if build directory exists
    BUILD_DIR="build"
    if grep -q '"public"' firebase.json 2>/dev/null; then
        BUILD_DIR=$(grep -o '"public"[[:space:]]*:[[:space:]]*"[^"]*"' firebase.json | cut -d'"' -f4)
    fi
    
    echo "Expected build directory: ${BUILD_DIR}"
    
    if [[ -d "${BUILD_DIR}" ]]; then
        echo -e "${GREEN}✓ Build directory exists${NC}"
        echo "Contents:"
        ls -la "${BUILD_DIR}" | head -10
    else
        echo -e "${YELLOW}⚠ Build directory not found${NC}"
        echo "Run 'npm run build' to create it"
    fi
    echo ""
}

# Check GitHub repository setup
check_github_setup() {
    echo -e "${YELLOW}Checking GitHub setup...${NC}"
    
    if [[ -d ".git" ]]; then
        echo -e "${GREEN}✓ Git repository initialized${NC}"
        
        # Check for GitHub remote
        if git remote -v | grep -q "github.com"; then
            echo -e "${GREEN}✓ GitHub remote found${NC}"
            echo "Remotes:"
            git remote -v
        else
            echo -e "${YELLOW}⚠ No GitHub remote found${NC}"
            echo "Add your GitHub repo as remote"
        fi
        
        # Check current branch
        CURRENT_BRANCH=$(git branch --show-current)
        echo "Current branch: ${CURRENT_BRANCH}"
        
        if [[ "${CURRENT_BRANCH}" == "main" || "${CURRENT_BRANCH}" == "master" ]]; then
            echo -e "${GREEN}✓ On deployment branch${NC}"
        else
            echo -e "${YELLOW}⚠ Not on main/master branch${NC}"
            echo "Deployment triggers on main/master branch pushes"
        fi
    else
        echo -e "${RED}✗ Not a git repository${NC}"
        echo "Run: git init"
    fi
    echo ""
}

# Check if GitHub Actions directory exists
check_github_actions() {
    echo -e "${YELLOW}Checking GitHub Actions setup...${NC}"
    
    if [[ -d ".github/workflows" ]]; then
        echo -e "${GREEN}✓ .github/workflows directory exists${NC}"
        echo "Workflow files:"
        ls -la .github/workflows/
    else
        echo -e "${YELLOW}⚠ .github/workflows directory not found${NC}"
        echo "Create directory: mkdir -p .github/workflows"
        echo "Add the firebase-deploy.yml file there"
    fi
    echo ""
}

# Provide deployment instructions
provide_instructions() {
    echo -e "${BLUE}=== Deployment Instructions ===${NC}"
    echo ""
    echo -e "${GREEN}To deploy your React app:${NC}"
    echo ""
    echo "1. Ensure GitHub Secrets are set:"
    echo "   - FIREBASE_SERVICE_ACCOUNT (you should have added this)"
    echo ""
    echo "2. Add the GitHub Actions workflow:"
    echo "   - Create .github/workflows/firebase-deploy.yml"
    echo "   - Copy the workflow content provided"
    echo ""
    echo "3. Commit and push to trigger deployment:"
    echo "   git add ."
    echo "   git commit -m 'Add Firebase deployment workflow'"
    echo "   git push origin main"
    echo ""
    echo "4. Monitor deployment:"
    echo "   - Go to your GitHub repo > Actions tab"
    echo "   - Watch the build and deploy process"
    echo ""
    echo "5. Access your deployed site:"
    echo "   - https://active-tome-467816-s6.web.app"
    echo "   - https://active-tome-467816-s6.firebaseapp.com"
    echo ""
}

# Run all checks
main() {
    check_firebase_json
    check_firebaserc  
    check_build_directory
    check_github_setup
    check_github_actions
    provide_instructions
    
    echo -e "${GREEN}🎉 Configuration check complete!${NC}"
    echo ""
    echo -e "${YELLOW}Next step: Add the GitHub Actions workflow file and push to deploy!${NC}"
}

# Execute main function
main "$@"

