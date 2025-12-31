# MERN Deployment Guide

## Overview
This guide covers deploying your MERN app to production using:
- **Backend**: Render or Railway (free tier available)
- **Frontend**: Vercel or Netlify (free tier available)
- **Database**: MongoDB Atlas (free tier available)

---

## STEP 1: Prepare MongoDB Atlas (Database)

### Option A: Use Existing MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create/login to your account
3. Create a cluster (free tier available)
4. Get your connection string: `mongodb+srv://<username>:<password>@cluster.mongodb.net/mern_product_db?retryWrites=true&w=majority`
5. Save this - you'll need it later

### Option B: Keep Current Local Setup
- Keep MongoDB running locally during development
- For production, you must use MongoDB Atlas (or another cloud DB)

---

## STEP 2: Deploy Backend

### Choose One: Render, Railway, or Heroku

#### **Option 1: Deploy to Render (Recommended - Easy & Free)**

1. **Prepare backend for production:**
   - Remove sensitive data from `.env` 
   - Create `.env.example` with placeholder values:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern_product_db
     PORT=5000
     NODE_ENV=production
     JWT_SECRET=your_secret_key_here
     JWT_EXPIRE=7d
     FRONTEND_URL=https://your-frontend-domain.com
     API_URL=https://your-backend-domain.com
     ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin https://github.com/YOUR_USERNAME/mern-product-management.git
   git push -u origin main
   ```

3. **Deploy on Render:**
   - Go to [Render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Configure:
     - Name: `mern-product-backend`
     - Runtime: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Environment Variables:
       - `MONGODB_URI`: Your Atlas connection string
       - `JWT_SECRET`: Your secret key
       - `FRONTEND_URL`: Your frontend domain
       - `NODE_ENV`: `production`
   - Deploy

4. **Get your backend URL:** `https://your-app-name.onrender.com`

---

#### **Option 2: Deploy to Railway**

1. **Go to [Railway.app](https://railway.app)**
2. **Connect GitHub** → Select your repo
3. **Click "Deploy Now"**
4. **Add variables:**
   - Go to Variables section
   - Add: `MONGODB_URI`, `JWT_SECRET`, `FRONTEND_URL`
5. **Railway generates your API URL automatically**

---

#### **Option 3: Deploy to Heroku** (Paid now, but simple)

1. Install Heroku CLI
2. Run from backend folder:
   ```bash
   heroku login
   heroku create your-app-name
   heroku config:set MONGODB_URI=your_connection_string
   heroku config:set JWT_SECRET=your_secret
   git push heroku main
   ```

---

## STEP 3: Deploy Frontend

### Choose One: Vercel, Netlify, or GitHub Pages

#### **Option 1: Deploy to Vercel (Recommended - Easiest)**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Click "New Project"** → Import your GitHub repo
3. **Configure:**
   - Framework Preset: `Create React App`
   - Root Directory: `frontend`
   - Environment Variables:
     - `REACT_APP_API_URL`: `https://your-backend-domain.com/api`
4. **Click "Deploy"** - Done! 🎉

**Your frontend URL:** `https://your-project-name.vercel.app`

---

#### **Option 2: Deploy to Netlify**

1. **Go to [Netlify.com](https://netlify.com)**
2. **Click "New site from Git"** → Connect GitHub
3. **Configure:**
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/build`
   - Environment Variables:
     - `REACT_APP_API_URL`: `https://your-backend-domain.com/api`
4. **Deploy**

---

#### **Option 3: Manual Deployment**

1. **Build frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload `build` folder to:**
   - GitHub Pages (free)
   - AWS S3 + CloudFront
   - Firebase Hosting
   - Any static hosting provider

---

## STEP 4: Connect Frontend to Backend

After deploying both, update your frontend environment:

**`frontend/.env.production`:**
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

OR set in deployment platform (Vercel/Netlify dashboard).

---

## STEP 5: Update Backend CORS

Update your backend `.env`:

```
FRONTEND_URL=https://your-frontend-url.com
```

This allows your frontend to call the backend API.

---

## Deployment Checklist

- [ ] MongoDB Atlas cluster created and connection string ready
- [ ] Backend `.env` configured with production variables
- [ ] Backend pushed to GitHub
- [ ] Backend deployed (Render/Railway/Heroku)
- [ ] Backend URL noted: `https://your-backend.com`
- [ ] Frontend `.env.production` configured with backend URL
- [ ] Frontend pushed to GitHub
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Frontend URL noted: `https://your-frontend.com`
- [ ] Test login/register works end-to-end
- [ ] Products and categories can be created

---

## Troubleshooting

### Backend not connecting to MongoDB
- Check connection string in MongoDB Atlas
- Whitelist your IP address in Atlas: Security → Network Access

### Frontend can't reach backend
- Check CORS settings in backend
- Verify `FRONTEND_URL` in backend `.env`
- Check `REACT_APP_API_URL` in frontend

### Environment variables not loading
- Redeploy after adding variables
- Check variable names (no typos)
- Verify they're set in deployment dashboard

---

## Quick Deploy Commands

**For local testing before deployment:**
```bash
# Terminal 1 - MongoDB
mongod

# Terminal 2 - Backend
cd backend
npm install
npm start

# Terminal 3 - Frontend
cd frontend
npm install
npm start
```

**For production build:**
```bash
# Backend: Already running on server
# Frontend:
cd frontend
npm run build
# Upload build folder to hosting service
```

---

## Recommended Stack for Your Project

| Component | Service | Tier | Cost |
|-----------|---------|------|------|
| Frontend | Vercel | Free | $0 |
| Backend | Render | Free | $0 |
| Database | MongoDB Atlas | Free | $0 |
| **Total** | | | **FREE** |

---

## Next Steps

1. Choose your deployment services (recommended: Vercel + Render + MongoDB Atlas)
2. Create accounts on each platform
3. Follow the deployment steps above
4. Test your deployed application
5. Share your live URL! 🚀

Need help with any specific step? Let me know!
