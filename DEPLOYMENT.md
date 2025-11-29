# 🚀 Deployment Guide - Blood Testing Platform

This guide will help you deploy the Blood Testing Laboratory Management System to the internet using GitHub, Netlify (frontend), and Render (backend).

## 📋 Prerequisites

1. GitHub account
2. Netlify account (free)
3. Render account (free)
4. Git installed on your computer

## 🔧 Step 1: Prepare Your Code

### 1.1 Update API Configuration

The frontend needs to know where the backend API is located. We'll use environment variables.

## 🌐 Step 2: Deploy Backend to Render

### 2.1 Create a Render Account
1. Go to [render.com](https://render.com)
2. Sign up for a free account (use GitHub to sign in)

### 2.2 Create a New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `blood-testing-api` (or your choice)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free

### 2.3 Add Requirements
Make sure `requirements.txt` includes:
```
Flask==3.0.2
Werkzeug==3.0.1
gunicorn==21.2.0
```

### 2.4 Get Your Backend URL
After deployment, Render will give you a URL like:
`https://blood-testing-api.onrender.com`

**Save this URL** - you'll need it for the frontend!

## 🎨 Step 3: Deploy Frontend to Netlify

### 3.1 Update Frontend API URL
The frontend will automatically use the Render backend URL when deployed.

### 3.2 Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Blood Testing Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/blood-testing-platform.git
git push -u origin main
```

### 3.3 Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Base directory**: Leave empty
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `templates` (or create a build script)
5. Add environment variable:
   - **Key**: `VITE_API_URL` or `REACT_APP_API_URL`
   - **Value**: Your Render backend URL (e.g., `https://blood-testing-api.onrender.com`)

### 3.4 Update Netlify Configuration
The `netlify.toml` file is already configured for static hosting.

## 🔄 Step 4: Update Frontend to Use Environment Variables

The frontend needs to detect if it's running locally or in production and use the appropriate API URL.

## ✅ Step 5: Test Your Deployment

1. Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
2. Test patient registration
3. Test quiz functionality
4. Verify API calls are working

## 🐛 Troubleshooting

### CORS Issues
If you see CORS errors, add CORS support to your Flask app.

### API Not Found
- Check that your Render service is running
- Verify the API URL in Netlify environment variables
- Check browser console for errors

### Static Files Not Loading
- Verify `netlify.toml` configuration
- Check that static files are in the correct directory

## 📝 Notes

- Render free tier may spin down after inactivity (takes ~30 seconds to wake up)
- Netlify free tier is generous for static sites
- Consider upgrading if you need always-on backend

