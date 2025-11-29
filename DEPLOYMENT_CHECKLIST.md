# ✅ Deployment Checklist

Use this checklist to ensure everything is set up correctly for deployment.

## 📦 Pre-Deployment

- [x] Flask app has CORS enabled
- [x] `requirements.txt` includes `gunicorn` and `flask-cors`
- [x] `Procfile` created for Render
- [x] `render.yaml` created (optional, for easier setup)
- [x] `netlify.toml` configured
- [x] HTML uses `/static/` paths (not Flask `url_for`)
- [x] Build script created to inject API URL
- [x] API URL configuration in `app.js`

## 🐙 GitHub Setup

- [ ] Git repository initialized
- [ ] All files committed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Repository is public (or you have access configured)

## 🔧 Backend Deployment (Render)

- [ ] Render account created
- [ ] New Web Service created
- [ ] GitHub repository connected
- [ ] Build command: `pip install -r requirements.txt`
- [ ] Start command: `gunicorn app:app`
- [ ] Instance type: Free
- [ ] Deployment successful
- [ ] Backend URL copied (e.g., `https://blood-testing-api.onrender.com`)

## 🎨 Frontend Deployment (Netlify)

- [ ] Netlify account created
- [ ] GitHub repository connected
- [ ] Build settings:
  - [ ] Base directory: (empty)
  - [ ] Build command: `node build.js`
  - [ ] Publish directory: `templates`
- [ ] Environment variable added:
  - [ ] Key: `API_BASE_URL`
  - [ ] Value: Your Render backend URL
- [ ] Deployment successful
- [ ] Frontend URL copied (e.g., `https://your-site.netlify.app`)

## 🔄 Post-Deployment

- [ ] Update `static/app.js` with your Render URL
- [ ] Commit and push the update
- [ ] Test frontend URL in browser
- [ ] Test patient registration
- [ ] Test quiz functionality
- [ ] Test API calls (check browser console)
- [ ] Verify CORS is working

## 🐛 Troubleshooting

If something doesn't work:

1. **Backend not responding?**
   - Check Render logs
   - Verify service is running (not sleeping)
   - Check `requirements.txt` has all dependencies

2. **Frontend can't connect?**
   - Verify API URL in `static/app.js`
   - Check browser console for errors
   - Verify CORS is enabled in Flask

3. **Static files not loading?**
   - Check Netlify build logs
   - Verify `templates/static/` directory exists
   - Check `netlify.toml` configuration

4. **Build fails?**
   - Check Node.js version (should be 18.x)
   - Verify `package.json` exists
   - Check build script syntax

## 📝 Important Notes

- Render free tier spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds
- Netlify free tier is generous for static sites
- Both services auto-deploy on git push

## 🎉 Success!

Once everything is checked, your Blood Testing Platform is live! 🚀

