# 🚀 TECSAA Digital Portfolio - Deployment Guide

**Your 3D animated portfolio is ready to deploy!** Follow these steps to get your site live.

---

## 📦 Project Summary

- **Project Name:** TECSAA Digital Portfolio
- **Tech:** React 18 + Three.js + GSAP + Vite
- **Status:** ✅ Ready for deployment
- **Build Size:** ~200KB (optimized)

---

## 🔧 Step 1: Setup GitHub Repository

### Create a new GitHub repo:

1. Go to [github.com/new](https://github.com/new)
2. Name: `tecsaa-portfolio`
3. Description: "3D Animated Portfolio for TECSAA Digital"
4. Make it **Public** (for Vercel free tier)
5. Click **Create Repository**

### Push your code:

```bash
# Navigate to project folder
cd /path/to/tecsaa-portfolio

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/tecsaa-portfolio.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

---

## 🎯 Step 2: Deploy on Vercel

### Option A: Quick Deploy (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (use GitHub account)
3. Click **New Project**
4. Select your `tecsaa-portfolio` repository
5. Click **Deploy**
6. **Done!** Your site is live in 2 minutes

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts, hit Enter for defaults
```

---

## ✅ Post-Deployment

### Your site will be live at:
```
https://tecsaa-portfolio.vercel.app/
```

### Setup Custom Domain (Optional):

1. Buy domain on Namecheap/GoDaddy
2. In Vercel: Settings → Domains
3. Add your domain (e.g., `portfolio.tecsaa.com`)
4. Follow DNS setup instructions
5. Wait 24 hours for propagation

---

## 🔄 Making Updates

After deployment, you can update anytime:

```bash
# Make changes locally
# Edit files in src/components/

# Commit changes
git add .
git commit -m "Update contact info" 

# Push to GitHub
git push

# Vercel auto-deploys! ✨
```

---

## 📋 Customization Checklist

Before final launch, update:

- [ ] **Landing section** - Update company name/role
- [ ] **Contact info** - Email, phone, location
- [ ] **Social links** - LinkedIn, Instagram, etc.
- [ ] **Services list** - Tech stack section
- [ ] **Images** - Replace with TECSAA assets
- [ ] **Colors** - Brand colors in CSS
- [ ] **Projects** - Update portfolio items
- [ ] **Meta tags** - SEO title in index.html

---

## 🐛 Troubleshooting

### Build fails on Vercel?
- Check Node version: Should be 18+
- Clear cache: Vercel Settings → Advanced → Clear all

### Site looks broken?
- Clear browser cache (Ctrl+Shift+Del)
- Check console for errors (F12)
- Vercel logs: Deployments tab

### Need help?
- Vercel docs: https://vercel.com/docs
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber/
- GSAP: https://greensock.com/docs/

---

## 📞 Support

- **Email:** yatharth114@gmail.com  
- **Website:** tecsaa.com
- **GitHub:** Push your code & share the link

---

**Happy deploying! 🎉**
