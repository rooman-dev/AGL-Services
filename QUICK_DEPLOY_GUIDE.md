# 🎯 HOSTINGER - 10 MINUTE DEPLOYMENT

## Step-by-Step Visual Guide

### STEP 1: PREPARE YOUR FILES (2 minutes)
```
1. Go to your AGL-Services folder
2. Right-click the folder → "Send to" → "Compressed (zipped) folder"
3. You now have: agl-services.zip
```

### STEP 2: LOGIN TO HOSTINGER (1 minute)
```
1. Open browser → Go to: https://hpanel.hostinger.com
2. Enter your email and password
3. Click "Login"
4. Click on "Hosting" in the dashboard
```

### STEP 3: OPEN FILE MANAGER (1 minute)
```
1. In Hostinger panel, find "FILE MANAGER" icon
2. Click it
3. You'll see folder structure
4. Double-click "public_html" to open it
```

### STEP 4: CLEAN public_html (1 minute)
```
1. You might see files like: index.html, default.html, etc.
2. Select ALL files (Ctrl+A or click checkbox)
3. Click "DELETE" button (top right)
4. Confirm deletion
5. Now public_html is empty ✅
```

### STEP 5: UPLOAD YOUR ZIP (2 minutes)
```
1. Click "UPLOAD" button (top right corner)
2. Click "Select File" or drag & drop
3. Choose your "agl-services.zip" file
4. Wait for green checkmark (upload complete)
5. Close upload window
```

### STEP 6: EXTRACT ZIP (1 minute)
```
1. You'll see "agl-services.zip" in file list
2. Right-click on it
3. Select "EXTRACT"
4. Choose "Extract here"
5. Wait for extraction to complete
6. You'll now see an "agl-services" folder
```

### STEP 7: MOVE FILES TO ROOT (1 minute)
```
1. Double-click the "agl-services" folder to open it
2. Press Ctrl+A to select ALL files and folders
3. You should see:
   - index.html
   - about.html
   - services.html
   - consultation.html
   - contact.html
   - css/ folder
   - js/ folder
   - images/ folder
   - other files
   
4. Click "MOVE" button (top)
5. Click "public_html" in the path (to go back)
6. Click "MOVE HERE"
7. Wait for files to move
8. Delete the empty "agl-services" folder and ZIP file
```

### STEP 8: SET PERMISSIONS (1 minute)
```
1. Select css/ folder → Right-click → Permissions → Set to 755
2. Select js/ folder → Right-click → Permissions → Set to 755
3. Select images/ folder → Right-click → Permissions → Set to 755
4. Done! ✅
```

### STEP 9: TEST YOUR WEBSITE (30 seconds)
```
1. Open new browser tab
2. Type your domain: https://yourdomain.com
3. OR use Hostinger preview URL from panel
4. Your website should load! 🎉
```

### STEP 10: ENABLE SSL (Optional but recommended)
```
1. Go back to Hostinger panel
2. Find "SSL" section
3. Click on your domain
4. Click "Install SSL"
5. Choose "Free SSL Certificate"
6. Wait 5-10 minutes for activation
7. Your site will have HTTPS! 🔒
```

---

## 📁 YOUR FILE STRUCTURE SHOULD LOOK LIKE THIS:

```
public_html/
│
├── index.html          ← Homepage
├── about.html          ← About page
├── services.html       ← Services page
├── consultation.html   ← Consultation page
├── contact.html        ← Contact page
├── .htaccess          ← Configuration file
│
├── css/
│   └── style.css      ← All your styles
│
├── js/
│   └── script.js      ← All your JavaScript
│
└── images/
    └── (all images)   ← Logo, photos, icons
```

---

## 🆘 TROUBLESHOOTING

### ❌ Website shows "Index of /"
**Fix:** Make sure index.html is in public_html root (not in a subfolder)

### ❌ CSS not working (website looks broken)
**Fix:** Check that css/ folder is in public_html root

### ❌ Images not showing
**Fix:** Check that images/ folder uploaded correctly

### ❌ 404 Error
**Fix:** 
1. Clear browser cache (Ctrl+F5)
2. Wait 5 minutes for DNS update
3. Check file names are correct (case-sensitive)

---

## ✅ FINAL CHECKLIST

After deployment, verify:
- [ ] Website loads at your domain
- [ ] All pages work (home, about, services, consultation, contact)
- [ ] Images display correctly
- [ ] Navigation menu works
- [ ] Forms are visible (may need Formspree setup)
- [ ] Footer links work
- [ ] Mobile view works
- [ ] HTTPS working (padlock icon)

---

## 🎯 QUICK TIPS

1. **Compress your ZIP properly**
   - Compress the folder contents, not the folder itself
   - Or just upload individual files

2. **Check file paths**
   - Use relative paths: `css/style.css` not `/css/style.css`
   - All lowercase filenames recommended

3. **Test locally first**
   - Open index.html in browser before uploading
   - Make sure everything works offline

4. **Keep a backup**
   - Download a backup from Hostinger monthly
   - Keep local copy of all files

---

## 📞 NEED HELP?

**Hostinger 24/7 Support:**
- Live Chat: Click chat icon in hPanel (bottom right)
- Email: support@hostinger.com
- Phone: Check your Hostinger account for number

**Common Questions:**
- "How do I upload files?" → Use File Manager
- "Where do files go?" → public_html folder
- "Why 404 error?" → Check index.html is in root
- "How to enable HTTPS?" → SSL section in panel

---

## 🎉 CONGRATULATIONS!

Your AGL Services website is now LIVE on the internet!

**Share your website:**
- https://yourdomain.com
- Test on mobile phone
- Share with friends/clients
- Start getting consultation requests!

---

**Next Steps:**
1. Setup form with Formspree (see FORM_SETUP_GUIDE.md)
2. Add Google Analytics for tracking
3. Submit to Google Search Console
4. Share on social media

**You're done! 🚀**
