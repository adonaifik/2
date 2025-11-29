# 📦 GitHub Setup Guide

Follow these steps to push your code to GitHub and deploy it.

## Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Blood Testing Laboratory Management System"
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `blood-testing-platform` (or your choice)
4. Description: "Blood Testing Laboratory Management System with Flask backend"
5. Choose **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 3: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/blood-testing-platform.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files there
3. Make sure these files are present:
   - `app.py`
   - `requirements.txt`
   - `templates/index.html`
   - `static/app.js`
   - `static/styles.css`
   - `netlify.toml`
   - `render.yaml`
   - `Procfile`

## Step 5: Update API URL in Code

Before deploying, you'll need to update the API URL in `static/app.js` with your Render backend URL after you deploy it.

## Next Steps

1. Deploy backend to Render (see DEPLOYMENT.md)
2. Deploy frontend to Netlify (see DEPLOYMENT.md)
3. Update API URL in frontend code
4. Test your live application!

## Making Future Updates

After making changes to your code:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Both Netlify and Render will automatically redeploy when you push changes!

