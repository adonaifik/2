# 🔧 Netlify Deployment Fix

## The Problem
Netlify is a static site host - it can't run Python/Flask. The backend needs to be on Render, and the frontend on Netlify needs to call it.

## The Solution

### Step 1: Deploy Backend to Render First
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. **Copy your Render URL** (e.g., `https://blood-testing-api.onrender.com`)

### Step 2: Update API URL in Code
Before deploying to Netlify, update the API URL:

1. Open `static/app.js`
2. Find this line (around line 11):
   ```javascript
   return 'https://blood-testing-api.onrender.com';
   ```
3. Replace with your actual Render URL

### Step 3: Deploy to Netlify

1. **Build Settings**:
   - **Base directory**: (leave empty)
   - **Build command**: `node build.js`
   - **Publish directory**: `templates`

2. **Environment Variables** (optional but recommended):
   - Go to Site settings → Environment variables
   - Add: `API_BASE_URL` = `https://your-render-url.onrender.com`

3. **Deploy**

### Step 4: Verify Static Files
After deployment, check:
- `https://your-site.netlify.app/static/app.js` should load
- `https://your-site.netlify.app/static/styles.css` should load

## Important Notes

- **Python/Flask runs on Render**, not Netlify
- **Netlify only serves HTML, CSS, and JavaScript**
- The frontend calls the Render API for backend functionality
- Make sure CORS is enabled in Flask (already done in app.py)

## Troubleshooting

### CSS/JS not loading?
- Check that `templates/static/` folder exists after build
- Verify build logs show files being copied
- Check browser console for 404 errors

### API calls failing?
- Verify Render backend is running
- Check API URL in `static/app.js` matches your Render URL
- Check browser console for CORS errors

### Site shows blank page?
- Check Netlify build logs for errors
- Verify `templates/index.html` exists
- Check browser console for JavaScript errors

