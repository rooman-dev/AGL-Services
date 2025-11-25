# 🚀 Getting Started Guide

Welcome to AdsGeniusLab website! This guide will get you up and running in 5 minutes.

## ⚡ 5-Minute Quick Start

### 1. Understand What You Have (1 minute)
You have a **fully functional digital marketing website** with:
- ✅ 7 main pages (Home, About, Services, Blog Index, Consultation, Contact)
- ✅ 12 complete blog posts
- ✅ English & Arabic language support
- ✅ Beautiful animations on scroll
- ✅ Mobile responsive design
- ✅ Contact forms & WhatsApp integration

### 2. View the Website Locally (1 minute)
```bash
# Option A: Direct in browser
open index.html

# Option B: Using Python web server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000

# Option C: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

**Check it works:**
- [ ] Home page loads
- [ ] Click language toggle (top-right) → switches to Arabic
- [ ] Click "Blog" → see all 12 blog posts
- [ ] Click "Read More" on a blog post → opens full article
- [ ] Scroll down → animations trigger (fade-in effects)
- [ ] Resize browser → mobile menu appears (hamburger icon)

### 3. Edit Content (2 minutes)
**To change text on a page:**
1. Open the HTML file (e.g., `index.html` for home page)
2. Find the text you want to change
3. Edit it directly in the HTML
4. Save the file (Ctrl+S)
5. Refresh browser (F5) to see changes

**To change a blog post:**
1. Open `blog-post-1.html` through `blog-post-12.html`
2. Find content section (between `<div class="article-content">` tags)
3. Edit text/HTML
4. Save and refresh

**To change company info:**
Find and replace:
- `AdsGeniusLab` → Your company name
- `adsgeniuslab@gmail.com` → Your email
- `+92 318 1292628` → Your phone
- `923181292628` → Your WhatsApp number

### 4. Deploy Online (1 minute)
Choose one:

**Option A: GitHub Pages (Free)**
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Enable GitHub Pages from main branch
4. Site automatically deployed at: `https://username.github.io/AGL-Services/`

**Option B: Netlify (Free)**
1. Connect GitHub repository to Netlify
2. Auto-deploys on every push to main branch
3. Get free HTTPS and custom domain

**Option C: Your Own Server**
1. Copy all files to server via FTP/SFTP
2. Done!

## 📚 Documentation Map

| Need | Document | Time |
|------|----------|------|
| Full project guide | README.md | 20 min |
| Add blog post | BLOG_POST_GUIDE.md | 30 min |
| Quick reference | QUICK_REFERENCE.md | 10 min |
| Topic index | DOCUMENTATION.md | 5 min |

## 🎯 Common First Tasks

### Task 1: Add Your Company Logo
1. Create/prepare your logo image
2. Save as `images/logo.png` (or .jpg)
3. In each HTML file, find: `<a class="navbar-brand">adsGeniuslab.</a>`
4. Replace with: `<img src="images/logo.png" alt="Logo" height="40">`
5. Test in browser

### Task 2: Change Website Colors
1. Open `css/style.css`
2. Find the `:root` section at the top (CSS variables)
3. Change colors:
   ```css
   --primary-dark: #0A0A0A;      /* Change background */
   --accent-blue: #0056D2;        /* Change primary color */
   --accent-light: #00D4FF;       /* Change highlights */
   ```
4. Save and refresh browser
5. Changes apply instantly everywhere

### Task 3: Add a New Blog Post
1. Copy `blog-post-1.html` → rename to `blog-post-13.html`
2. Open `blog-post-13.html`
3. Change "1" to "13" in: `data-i18n="blog_post_1_title"` → `data-i18n="blog_post_13_title"`
4. Update article title, date, content
5. Open `blog.html`
6. Copy a blog card and update to point to `blog-post-13.html`
7. Save both files
8. Test locally by opening blog.html

### Task 4: Update Contact Information
Search for and replace:
- Email address: `adsgeniuslab@gmail.com`
- Phone: `+92 318 1292628`
- WhatsApp link: `https://wa.me/923181292628`
- Company name: `AdsGeniusLab`

### Task 5: Connect Contact Form
1. Go to https://formspree.io/
2. Create account and new form
3. Copy your form ID
4. Open `contact.html` and `consultation.html`
5. Find `<form action="https://formspree.io/f/YOUR_ID">`
6. Replace `YOUR_ID` with your actual form ID
7. Test by submitting form

## 🎨 Customization Ideas

### Quick Customizations (5-10 minutes)
- [ ] Change company colors
- [ ] Update company info (email, phone, name)
- [ ] Change hero image or background
- [ ] Update service descriptions
- [ ] Edit about page content

### Medium Customizations (30 minutes)
- [ ] Add your company logo
- [ ] Update page titles and meta descriptions
- [ ] Add/edit blog posts
- [ ] Customize navigation menu
- [ ] Update footer information

### Advanced Customizations (1+ hours)
- [ ] Change page layout
- [ ] Add new pages
- [ ] Modify colors and fonts globally
- [ ] Add new functionality/features
- [ ] Integrate with analytics tools

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Changes not showing | Hard refresh: Ctrl+Shift+R or Cmd+Shift+R |
| Language toggle doesn't work | Check `data-i18n` attributes exist, clear browser cache |
| Links don't work | Check file names match href, ensure files exist |
| Mobile menu stuck open | Clear cache, hard refresh, test in private window |
| Animations don't show | Scroll page (animations trigger on scroll) |
| Form doesn't submit | Verify Formspree ID is correct, check network tab (F12) |
| Images don't show | Check image path is correct, file exists |

## 📱 Testing Checklist

Before going live, test:

- [ ] **Desktop**: Open in Chrome, Firefox, Safari
- [ ] **Tablet**: Test on iPad or tablet
- [ ] **Mobile**: Test on phone (landscape and portrait)
- [ ] **Links**: Click every link, verify destination
- [ ] **Forms**: Submit test data, verify email received
- [ ] **Language**: Click toggle, verify text changes
- [ ] **Animations**: Scroll page, verify animations trigger
- [ ] **Mobile Menu**: Test hamburger menu opens/closes
- [ ] **Images**: All images load correctly
- [ ] **Console**: F12 → Console, no red errors

## 📝 File Structure Reference

```
AGL-Services/
├── index.html              ← Home page
├── about.html              ← About page
├── services.html           ← Services page
├── blog.html               ← Blog index (shows all posts)
├── blog-post-1.html        ← Blog post 1 (edit for content)
│   through
├── blog-post-12.html       ← Blog post 12 (edit for content)
├── consultation.html       ← Consultation form
├── contact.html            ← Contact form and info
├── css/
│   └── style.css           ← All styling (edit for colors, fonts)
├── js/
│   └── script.js           ← All JavaScript (language switching, animations)
├── images/                 ← Place images here
├── README.md               ← Full documentation
├── BLOG_POST_GUIDE.md      ← How to manage blog posts
├── QUICK_REFERENCE.md      ← Quick lookup
├── DOCUMENTATION.md        ← Documentation index
└── GETTING_STARTED.md      ← This file
```

## 🚀 Next Steps

**After quick start:**

1. **Read README.md** (20 minutes)
   - Understand full feature set
   - Learn about technology used
   - Find customization guide

2. **Use QUICK_REFERENCE.md** (keep open)
   - Common tasks
   - File locations
   - Git commands
   - Troubleshooting

3. **Read BLOG_POST_GUIDE.md** (when managing blog)
   - How to add new posts
   - How to update existing posts
   - Translation system
   - FAQ

4. **Customize Your Website**
   - Update colors, fonts
   - Add your content
   - Deploy online

## 💡 Pro Tips

1. **Use Find & Replace** (Ctrl+H in most editors)
   - Replace all instances of company name at once
   - Replace contact info across all files

2. **Test Locally First**
   - Always test changes in browser before deploying
   - Use mobile device simulator (F12 → mobile view)

3. **Use Git for Backups**
   - Commit changes regularly: `git commit -m "description"`
   - Easy to revert if something breaks

4. **Keep Documentation Open**
   - Bookmark QUICK_REFERENCE.md
   - Refer to README.md for detailed info
   - Use DOCUMENTATION.md to find topics

5. **Mobile First**
   - Always test on mobile devices
   - Most users visit on mobile

## 📞 Need Help?

If you get stuck:

1. **Check Documentation**
   - README.md → Troubleshooting
   - BLOG_POST_GUIDE.md → FAQ
   - QUICK_REFERENCE.md → Quick Troubleshooting

2. **Check Browser Console** (F12 → Console)
   - Look for red error messages
   - Search for the error online

3. **Contact Support**
   - Email: adsgeniuslab@gmail.com
   - Phone: +92 318 1292628
   - WhatsApp: https://wa.me/923181292628

## ✅ You're Ready!

Your website is ready to customize and deploy. Follow the Quick Start above, then dive into the detailed documentation as needed.

**Remember:**
- Keep it simple at first
- Test changes locally
- Deploy when confident
- Documentation is your friend

Good luck! 🎉

---

**Next**: Open `README.md` for comprehensive documentation, or `QUICK_REFERENCE.md` for quick lookups.

**Last Updated**: November 26, 2025
