# 🚀 Quick Start Deployment Guide

Follow these simple steps to deploy your Blood Testing Platform to the internet!

## 📋 Step-by-Step Instructions

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Blood Testing Platform"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `blood-testing-platform`
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/blood-testing-platform.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy Backend to Render

1. **Sign up at Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub (free)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `blood-testing-platform`

3. **Configure**:
   - **Name**: `blood-testing-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free

4. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - **Copy your service URL** (e.g., `https://blood-testing-api.onrender.com`)

### Step 3: Update API URL

1. **Update `static/app.js`**:
   - Find line with: `return 'https://blood-testing-api.onrender.com';`
   - Replace with your actual Render URL
   - Commit and push:
     ```bash
     git add static/app.js
     git commit -m "Update API URL"
     git push
     ```

### Step 4: Deploy Frontend to Netlify

1. **Sign up at Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub (free)

2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select `blood-testing-platform` repository

3. **Configure Build**:
   - **Base directory**: (leave empty)
   - **Build command**: `node build.js` (or leave empty)
   - **Publish directory**: `templates`

4. **Add Environment Variable**:
   - Go to Site settings → Environment variables
   - Add: `API_BASE_URL` = `https://your-render-url.onrender.com`

5. **Deploy**:
   - Click "Deploy site"
   - Wait for deployment (2-3 minutes)
   - **Your site is live!** 🎉

### Step 5: Test Your Live Site

1. Visit your Netlify URL
2. Test the quiz
3. Register a patient
4. Submit a test
5. Everything should work! ✨

## 🔄 Making Updates

After making changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Both Render and Netlify will automatically redeploy!

## 🐛 Troubleshooting

### Backend not working?
- Check Render logs for errors
- Verify `requirements.txt` has all dependencies
- Make sure `gunicorn` is in requirements.txt

### Frontend can't connect to backend?
- Verify API URL in `static/app.js` matches your Render URL
- Check browser console for CORS errors
- Make sure CORS is enabled in Flask (already added)

### Static files not loading?
- Verify `netlify.toml` publish directory is `templates`
- Check that static files are in the `static/` folder

## 📞 Need Help?

Check the detailed guides:
- [DEPLOYMENT.md](DEPLOYMENT.md) - Full deployment guide
- [GITHUB_SETUP.md](GITHUB_SETUP.md) - GitHub setup details

---

**That's it! Your Blood Testing Platform is now live on the internet! 🌐**

