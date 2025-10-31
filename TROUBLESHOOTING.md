# 🔧 AdsGeniusLab - Troubleshooting Guide

## Common Issues & Solutions

### 1. Forms Not Sending Emails

**Problem:** You submit the form but don't receive an email

**Solutions:**

1. **Check Formspree Setup:**
   - Are you using the correct Form ID?
   - Go to formspree.io → Select your form
   - Copy the Form ID again
   - Make sure it's exactly as shown (e.g., `f_abc123xyz`)

2. **Verify Email in Formspree:**
   - Log in to Formspree
   - Go to form settings
   - Check recipient email is correct
   - Look for verification email (may be in spam)
   - Click verification link if not verified

3. **Check Form HTML:**
   ```html
   <!-- This should be in consultation.html -->
   <form action="https://formspree.io/f/f_YOUR_ID_HERE" method="POST">
   ```
   - Make sure `f_` prefix is included
   - Make sure Form ID matches exactly

4. **Test Form:**
   - Fill out test form with real email
   - Check spam/junk folder
   - Wait 2-3 minutes
   - Check Formspree dashboard for submission

---

### 2. Website Looks Wrong on Mobile

**Problem:** Website looks distorted, text too big/small, or layout broken

**Solutions:**

1. **Clear Browser Cache:**
   - Windows: Ctrl + Shift + Delete
   - Mac: Cmd + Shift + Delete
   - Then refresh page: F5

2. **Hard Refresh:**
   - Windows: Ctrl + F5
   - Mac: Cmd + Shift + R

3. **Check Viewport Meta Tag:**
   - Should be in `<head>` of every HTML file:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

4. **Test on Different Phone:**
   - Use DevTools (F12) → Toggle device mode
   - Test on actual phone if possible

5. **Check Bootstrap CSS:**
   - Open browser console (F12)
   - Check if Bootstrap CSS loaded (should show in Networks tab)
   - If not, internet connection might be down

---

### 3. Navigation Links Not Working

**Problem:** Clicking menu items doesn't navigate to pages

**Solutions:**

1. **Check File Names Match:**
   - Should be exactly:
     - `index.html` (not Index.html)
     - `about.html` (not About.html)
     - `services.html` (not Services.html)
     - `consultation.html` (not Consultation.html)
     - `contact.html` (not Contact.html)

2. **Verify Links in Navigation:**
   ```html
   <!-- Should look like this -->
   <a class="nav-link" href="index.html">Home</a>
   <a class="nav-link" href="about.html">About</a>
   <a class="nav-link" href="services.html">Services</a>
   <a class="nav-link" href="consultation.html">Consultation</a>
   <a class="nav-link" href="contact.html">Contact</a>
   ```

3. **File Upload Issues:**
   - Make sure all HTML files uploaded to public_html
   - Not in a subfolder
   - Check Hostinger File Manager

4. **Test by Direct URL:**
   - Try: `yoursite.com/about.html`
   - If this works, issue is with links
   - If doesn't work, file not uploaded

---

### 4. Styles Not Loading (Page Looks Plain)

**Problem:** CSS not applied, page is just text, no colors/formatting

**Solutions:**

1. **Check CSS File Exists:**
   - In Hostinger File Manager
   - Navigate to: `public_html/css/`
   - Should see `style.css` there
   - If not, upload it

2. **Verify CSS Path in HTML:**
   ```html
   <!-- In <head> of every HTML file, should have: -->
   <link rel="stylesheet" href="css/style.css">
   ```
   - Not `href="/css/style.css"` (don't use forward slash)
   - Not `href="./css/style.css"` (don't need ./)

3. **Check Folder Structure:**
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   ```
   - CSS must be in `css` folder
   - Not anywhere else

4. **Hard Refresh:**
   - Ctrl + Shift + Delete
   - Then Ctrl + F5

5. **Check Console Errors:**
   - Press F12 → Console tab
   - Look for red error messages
   - Share error message in support

---

### 5. Images Not Showing

**Problem:** Image placeholders appear or image doesn't load

**Solutions:**

1. **Check Image Path:**
   ```html
   <!-- Correct -->
   <img src="images/your-image.jpg" alt="Description">
   
   <!-- Wrong -->
   <img src="/images/your-image.jpg" alt="Description">
   <img src="./images/your-image.jpg" alt="Description">
   ```

2. **Verify Image Exists:**
   - In Hostinger File Manager
   - Go to `public_html/images/`
   - Image file should be there
   - Check file name spelling exactly

3. **Image File Names:**
   - Use lowercase names: `my-image.jpg` (not `My-Image.JPG`)
   - No spaces in file names
   - No special characters except dash/underscore

4. **Supported Formats:**
   - JPG/JPEG ✅
   - PNG ✅
   - WebP ✅
   - GIF ✅
   - SVG ✅

5. **Image Size:**
   - Should be optimized (under 500KB each)
   - Use online tools to compress images
   - Recommended: https://imagecompressor.com/

---

### 6. Forms Validated But Not Submitting

**Problem:** Form shows validation OK but submission fails

**Solutions:**

1. **Check Form Method:**
   ```html
   <!-- Should be POST, not GET -->
   <form action="..." method="POST" class="needs-validation" novalidate>
   ```

2. **Check Form Input Names:**
   ```html
   <!-- Input must have name attribute -->
   <input type="text" name="name" required>
   <input type="email" name="email" required>
   
   <!-- Wrong -->
   <input type="text" id="name">  <!-- Missing name="" -->
   ```

3. **Verify Formspree Action:**
   ```html
   <!-- Must have correct Form ID -->
   <form action="https://formspree.io/f/f_abc123xyz" method="POST">
   ```

4. **Test with Browser DevTools:**
   - Press F12 → Network tab
   - Fill form and submit
   - Look for POST request
   - Check response status

5. **Check Required Fields:**
   - All fields with `required` must be filled
   - Email field must have valid format

---

### 7. Mobile Menu Not Opening/Closing

**Problem:** Hamburger menu doesn't work on mobile

**Solutions:**

1. **Check Bootstrap JavaScript:**
   - Should be before `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. **Verify HTML Structure:**
   ```html
   <nav class="navbar navbar-expand-lg navbar-light">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <!-- Menu items here -->
     </div>
   </nav>
   ```

3. **Check Custom JavaScript:**
   - Open `js/script.js`
   - Look for `initializeNavbar()` function
   - Should be called on page load

4. **Test in Browser:**
   - Make screen smaller (F12 → Toggle device toolbar)
   - Should see hamburger menu at 992px width or less

---

### 8. Website Too Slow

**Problem:** Website takes too long to load

**Solutions:**

1. **Enable Caching in Hostinger:**
   - Log in to Hostinger → cPanel
   - Look for "Performance" or "Cache" settings
   - Enable HTTP/2, GZIP compression
   - Enable browser caching

2. **Optimize Images:**
   - Images are usually the culprit
   - Compress before uploading
   - Use https://imagecompressor.com/
   - Aim for images under 300KB each

3. **Check File Sizes:**
   - CSS: 850KB (fine)
   - JS: 20KB (fine)
   - Images: should be < 500KB each

4. **Use Content Delivery Network:**
   - Bootstrap CDN already used (fast)
   - Font Awesome CDN already used (fast)
   - Google Fonts already used (fast)

5. **Test Speed:**
   - Use https://gtmetrix.com/
   - Use https://pagespeed.web.dev/
   - Check what's slow

---

### 9. Links Open in Same Tab (Want New Tab)

**Problem:** Clicking external links navigates away from site

**Solution:**
```html
<!-- Add target="_blank" to open in new tab -->
<a href="https://example.com" target="_blank">Link Text</a>

<!-- Already done for social links, but you can add to others -->
```

---

### 10. Form Spam/Security Issues

**Problem:** Getting spam form submissions

**Solutions:**

1. **Enable Formspree Spam Filter:**
   - Log in to formspree.io
   - Form settings → Spam filter
   - Enable CAPTCHA or reCAPTCHA

2. **Add to Your Form:**
   ```html
   <!-- Formspree handles this automatically -->
   <!-- No extra code needed if you enable in dashboard -->
   ```

3. **Monitor Submissions:**
   - Check Formspree dashboard regularly
   - Delete spam entries manually if needed

---

### 11. Email Looks Wrong on Phone

**Problem:** Email received from form looks formatted wrong

**Solution:**
- This is how email clients render HTML
- Not much you can do on your end
- Formspree handles email formatting
- Check Formspree settings for email template

---

### 12. Can't Access Website After Upload

**Problem:** Website shows 404 or file not found error

**Solutions:**

1. **Check File Structure:**
   - Files should be in `public_html`
   - Not in a subfolder
   - Check case sensitivity (important on Linux servers)

2. **Verify URL:**
   - Should be: `yoursite.com/` or `yoursite.com/index.html`
   - Not: `yoursite.com/public_html/`
   - Not: `yoursite.com/folder/`

3. **Check Hostinger Setup:**
   - Make sure domain points to public_html
   - Go to Hostinger → Domain settings
   - Verify document root is set to public_html

4. **Clear DNS Cache:**
   - Wait 15-30 minutes after upload
   - DNS changes take time to propagate
   - Try different browser/device

---

### 13. Getting SSL/HTTPS Errors

**Problem:** "Not Secure" warning or SSL certificate error

**Solutions:**

1. **Hostinger Provides Free SSL:**
   - Log in to Hostinger
   - Go to SSL → Install free SSL
   - Wait 15 minutes for activation
   - Refresh page

2. **Force HTTPS:**
   - In Hostinger cPanel
   - Go to settings
   - Find "Force HTTPS" option
   - Enable it

3. **Update Links:**
   - If mixed content warning, ensure all CDN links use https://
   - Already done in this template

---

### 14. Special Characters Not Displaying

**Problem:** Accented letters, emojis, or symbols show as ?

**Solution:**
- All HTML files already have correct charset:
```html
<meta charset="UTF-8">
```
- Should be in `<head>` of every file (it is)
- If still issue, check file is saved as UTF-8

---

### 15. Contact Form Receiving Duplicate Emails

**Problem:** Getting same form submission multiple times

**Solutions:**

1. **Check JavaScript:**
   - Form shouldn't submit twice
   - Make sure script.js loaded only once

2. **Check Formspree:**
   - May be email client issue
   - Check Formspree dashboard
   - Should show only one submission

3. **Test Again:**
   - Try submitting fresh form
   - Check if still happens
   - May have been one-time issue

---

## 🆘 Getting Help

### Step 1: Gather Information
- Screenshot of issue
- Browser used
- Mobile or desktop
- Exact error message (if any)
- When it started happening

### Step 2: Check Documentation
- README.md (detailed setup)
- QUICK_SETUP.md (basics)
- CUSTOMIZATION_GUIDE.md (how to modify)

### Step 3: Contact Support
- **Formspree Issues:** https://formspree.io/support
- **Hostinger Issues:** https://support.hostinger.com
- **Bootstrap Issues:** https://getbootstrap.com/docs
- **Font Awesome Issues:** https://fontawesome.com/support

### Step 4: Debug in Browser
Press F12 and check:
- **Console tab:** Look for red errors
- **Network tab:** Check if CSS/JS loaded
- **Elements tab:** Check HTML structure
- **Device Mode:** Test mobile (Ctrl+Shift+M)

---

## 📋 Diagnostic Checklist

Before contacting support, verify:

- [ ] All files uploaded to public_html
- [ ] CSS folder exists with style.css inside
- [ ] JS folder exists with script.js inside
- [ ] File names match exactly (case-sensitive)
- [ ] Formspree Form IDs are correct
- [ ] Formspree emails verified
- [ ] Contact information updated
- [ ] Browser cache cleared
- [ ] Page hard refreshed (Ctrl+F5)
- [ ] Tested on different browser
- [ ] Tested on mobile
- [ ] Internet connection stable
- [ ] Website accessible from phone hotspot (rules out ISP issue)

---

## ✅ Testing Checklist

Verify these work before going live:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] About page displays
- [ ] Services page shows pricing
- [ ] Consultation form opens
- [ ] Contact page displays
- [ ] Test form submission
- [ ] Received test email
- [ ] Social media links open
- [ ] WhatsApp link works
- [ ] Email links open
- [ ] Phone links dial
- [ ] Website responsive on mobile
- [ ] Mobile menu works
- [ ] Forms validate properly

---

## 🎯 Quick Problem Solver

| Problem | Quick Fix |
|---------|-----------|
| Broken styles | Clear cache (Ctrl+Shift+Delete) + Hard refresh (Ctrl+F5) |
| Forms not working | Check Formspree Form ID + Verify email |
| Links broken | Check file names match exactly |
| Mobile looks wrong | Device toggle (F12) + check viewport meta tag |
| Images missing | Check path: `src="images/filename.jpg"` |
| Slow loading | Compress images, enable caching |
| SSL warning | Enable free SSL in Hostinger |
| Menu not opening | Check Bootstrap JS loaded |
| Page not found | Verify file in public_html, not subfolder |

---

**Still stuck?** Check all documentation files and browser console for specific error messages.

Good luck! 🚀

