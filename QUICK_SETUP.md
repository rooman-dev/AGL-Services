# AdsGeniusLab Website - Quick Setup Guide

## ⚡ 5-Minute Setup Instructions

### Step 1: Get Your Formspree Form IDs (2 minutes)

1. Visit **[Formspree.io](https://formspree.io)**
2. Click **"Sign Up"** and create a free account
3. Click **"New Form"** 
4. Name it **"Consultation"** → Click Create
5. Copy the **Form ID** shown (looks like: `f_xxxxxxxx`)
6. Repeat steps 3-5 to create another form named **"Contact"** and copy its ID

#### Example Form IDs:
```
Consultation Form: f_abc123xyz
Contact Form:      f_def456uvw
```

### Step 2: Update Formspree Form IDs (1 minute)

**In `consultation.html` (Line ~165):**
```html
<!-- Find this line: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- Replace with your actual Consultation Form ID: -->
<form action="https://formspree.io/f/f_abc123xyz" method="POST">
```

**In `contact.html` (Line ~168):**
```html
<!-- Find this line: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- Replace with your actual Contact Form ID: -->
<form action="https://formspree.io/f/f_def456uvw" method="POST">
```

### Step 3: Update Contact Information (1 minute)

**Replace in ALL files:**
- `+1234567890` → Your actual phone number
- `info@adsgeniuslab.com` → Your company email
- `1234567890` (in WhatsApp links) → Your WhatsApp number

**Quick Find & Replace:**
1. Open each HTML file
2. Use Ctrl+H (Find & Replace)
3. Replace phone number across all files
4. Replace email address across all files

### Step 4: Upload to Hostinger (1 minute)

**Via Hostinger File Manager:**
1. Log in to Hostinger → cPanel
2. Open **File Manager**
3. Navigate to **public_html** folder
4. Upload all files and folders (maintaining structure):
   - Upload: `index.html`, `about.html`, `services.html`, `consultation.html`, `contact.html`
   - Upload: `css` folder
   - Upload: `js` folder
   - Upload: `images` folder (when you add images)

**Important:** Keep folder structure intact!

## 🔧 File Structure (Keep This Way)

```
public_html/                    ← Upload everything here
├── index.html
├── about.html
├── services.html
├── consultation.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/                    ← For future images
```

## ✅ Test Your Setup

1. **After uploading to Hostinger:**
   - Visit: `yoursite.com/index.html`
   - Click through all pages
   - Test navigation bar
   - Test "Schedule Consultation" button

2. **Test Consultation Form:**
   - Fill out form with test data
   - Click "Send Consultation Request"
   - Check your email inbox for submission

3. **Test Contact Form:**
   - Fill out with test data
   - Submit
   - Verify email received

## 🚨 Common Issues & Solutions

### Issue: Forms not sending emails
**Solution:** 
- Verify Form IDs are correct in HTML
- Check Formspree email is verified (check email inbox)
- Clear browser cache and try again

### Issue: Website looks wrong on phone
**Solution:**
- Clear browser cache: Ctrl+Shift+Delete
- Refresh page: Ctrl+F5
- Try different browser
- Check internet connection

### Issue: Navigation links not working
**Solution:**
- Ensure file names are exactly as written
- HTML files should be: index.html, about.html, services.html, consultation.html, contact.html
- File names are case-sensitive on servers

### Issue: Styles not loading (page looks plain)
**Solution:**
- Check CSS folder is in same directory as HTML files
- Verify style.css is in css/ folder
- Hard refresh browser: Ctrl+Shift+R

## 📞 Before Going Live Checklist

- [ ] All 5 HTML files uploaded to public_html
- [ ] css and js folders uploaded
- [ ] Formspree Form IDs replaced in consultation.html
- [ ] Formspree Form IDs replaced in contact.html
- [ ] All phone numbers updated
- [ ] All email addresses updated
- [ ] Tested all pages on desktop
- [ ] Tested all pages on mobile (use phone or DevTools)
- [ ] Submitted test form - received email confirmation
- [ ] All navigation links work
- [ ] Social media links open correctly

## 💡 Pro Tips

### To Add Your Logo:
1. Place logo image in `images` folder
2. Find navbar section in HTML files
3. Replace `<i class="fas fa-lightbulb"></i> AdsGeniusLab` with:
   ```html
   <img src="images/logo.png" alt="AdsGeniusLab" style="height: 40px;">
   ```

### To Add WhatsApp Chat Widget:
Add this before `</body>` tag:
```html
<a href="https://wa.me/YOUR_NUMBER" class="whatsapp-btn" target="_blank">
  <i class="fab fa-whatsapp"></i>
</a>
```

### To Add Google Analytics:
1. Go to Google Analytics
2. Create account and get Tracking ID
3. Add before `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 📧 Verify Formspree is Working

1. Go to formspree.io dashboard
2. Select your form
3. Should show "Submissions" count
4. Each form submission appears in real-time

## 🎯 Your Website Features

✅ **Mobile Responsive** - Works on all devices
✅ **Fast Loading** - Optimized for speed
✅ **SEO Friendly** - Proper HTML structure
✅ **Professional Design** - Royal blue premium theme
✅ **Email Forms** - Formspree integration
✅ **No Backend** - Pure HTML/CSS/JS
✅ **Hostinger Ready** - Static files only
✅ **WhatsApp Integration** - Direct messaging links
✅ **Smooth Animations** - Professional interactions
✅ **Consistent Branding** - All pages match

## 🎓 Need More Help?

- **Formspree Help:** https://formspree.io/help
- **Hostinger Help:** https://support.hostinger.com
- **Bootstrap 5:** https://getbootstrap.com/docs
- **Font Awesome Icons:** https://fontawesome.com/icons

---

**Questions?** Check the main README.md file for detailed documentation.

**Good luck! Your website is ready to go live! 🚀**
