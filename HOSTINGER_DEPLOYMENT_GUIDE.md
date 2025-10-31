# 🚀 Hostinger Deployment Guide - AGL Services

Complete step-by-step guide to deploy your AGL Services website to Hostinger.

---

## 📋 **Prerequisites**

Before starting, make sure you have:
- ✅ Hostinger hosting account (active)
- ✅ Domain name (if using custom domain)
- ✅ All website files ready
- ✅ FTP credentials from Hostinger

---

## 🎯 **Method 1: File Manager (Easiest)**

### **Step 1: Login to Hostinger**
1. Go to [hostinger.com](https://www.hostinger.com)
2. Click "Login" (top right)
3. Enter your email and password
4. Click on "Hosting" in the dashboard

### **Step 2: Access File Manager**
1. In your hosting panel, find **"File Manager"**
2. Click to open it
3. Navigate to **`public_html`** folder (this is your website root)

### **Step 3: Clean public_html**
1. Select all existing files in `public_html`
2. Click "Delete" button
3. Confirm deletion (backup first if there's anything important)

### **Step 4: Upload Your Files**

**Option A: Upload ZIP File (Recommended)**
1. On your computer, compress your entire AGL-Services folder into a ZIP file:
   - Right-click on the AGL-Services folder
   - Select "Send to" > "Compressed (zipped) folder"
   - Name it `agl-services.zip`

2. In Hostinger File Manager:
   - Click "Upload" button (top right)
   - Select your `agl-services.zip` file
   - Wait for upload to complete

3. Extract the ZIP:
   - Right-click on `agl-services.zip`
   - Select "Extract"
   - Choose "Extract here"
   - Delete the ZIP file after extraction

4. Move files to root:
   - Open the extracted folder
   - Select ALL files and folders (index.html, css, js, images, etc.)
   - Click "Move"
   - Navigate to `public_html` (parent folder)
   - Click "Move Here"
   - Delete the empty folder

**Option B: Upload Individual Files**
1. Click "Upload" in File Manager
2. Select all your files:
   - index.html
   - about.html
   - services.html
   - consultation.html
   - contact.html
   - css/ folder
   - js/ folder
   - images/ folder
   - All .md files (optional)
3. Wait for upload to complete

### **Step 5: Verify File Structure**

Your `public_html` should look like this:
```
public_html/
├── index.html
├── about.html
├── services.html
├── consultation.html
├── contact.html
├── form-test.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (your images)
└── (other files)
```

### **Step 6: Set Permissions**
1. Select all folders (css, js, images)
2. Right-click > "Change Permissions"
3. Set to **755**
4. Check "Apply to subdirectories"
5. Click "Save"

### **Step 7: Test Your Website**
1. Go to your domain (e.g., `yourdomain.com`)
2. Or use Hostinger preview URL (found in hosting panel)
3. Check all pages load correctly:
   - ✅ index.html (homepage)
   - ✅ about.html
   - ✅ services.html
   - ✅ consultation.html
   - ✅ contact.html

---

## 🎯 **Method 2: FTP (FileZilla)**

### **Step 1: Get FTP Credentials**
1. In Hostinger panel, go to **"FTP Accounts"**
2. Note down:
   - **FTP Host:** (e.g., ftp.yourdomain.com)
   - **FTP Username:** (e.g., u123456789)
   - **FTP Password:** (click "Show" to reveal)
   - **Port:** 21

### **Step 2: Install FileZilla**
1. Download FileZilla Client from [filezilla-project.org](https://filezilla-project.org/)
2. Install and open FileZilla

### **Step 3: Connect to Hostinger**
1. In FileZilla, enter at top:
   - **Host:** Your FTP hostname
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21
2. Click "Quickconnect"

### **Step 4: Navigate to public_html**
1. In the "Remote site" panel (right side)
2. Navigate to `/public_html` folder
3. Delete any existing files (backup first!)

### **Step 5: Upload Files**
1. In the "Local site" panel (left side)
2. Navigate to your AGL-Services folder
3. Select ALL files and folders
4. Drag and drop to the right panel (public_html)
5. Wait for upload to complete
6. Verify all files transferred successfully

---

## 🎯 **Method 3: Git Deployment (Advanced)**

### **Step 1: Enable Git in Hostinger**
1. In Hostinger panel, go to **"Git"**
2. Click "Create Repository"
3. Set branch to `main`
4. Set deployment path to `public_html`

### **Step 2: Push to GitHub**
1. Create repository on GitHub
2. In your local AGL-Services folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/rooman-dev/AGL-Services.git
   git push -u origin main
   ```

### **Step 3: Connect Hostinger to GitHub**
1. In Hostinger Git section
2. Click "Connect to Git"
3. Choose GitHub
4. Authorize Hostinger
5. Select your repository
6. Click "Deploy"

### **Step 4: Auto-Deploy Setup**
1. Enable "Auto Deploy"
2. Now every push to GitHub will auto-deploy to Hostinger

---

## ⚙️ **Post-Deployment Setup**

### **1. Setup Form Submission**

After deployment, configure your consultation form:

1. **Sign up for Formspree** (recommended):
   - Go to [formspree.io](https://formspree.io)
   - Create account and new form
   - Copy your form endpoint

2. **Update consultation.html:**
   - Login to Hostinger File Manager
   - Navigate to `public_html/consultation.html`
   - Right-click > "Edit"
   - Find line with `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual Formspree ID
   - Click "Save"

3. **Test the form** on your live site

### **2. Setup Custom Domain**

If using custom domain:

1. In Hostinger panel, go to **"Domains"**
2. Click "Add Domain"
3. Enter your domain name
4. Update nameservers (if domain registered elsewhere)
5. Wait 24-48 hours for DNS propagation

### **3. Enable SSL Certificate (HTTPS)**

1. In Hostinger panel, go to **"SSL"**
2. Select your domain
3. Click "Install SSL"
4. Choose "Free SSL" (Let's Encrypt)
5. Wait 5-10 minutes for activation

### **4. Configure .htaccess (Optional)**

Create `.htaccess` file in public_html for:

**Force HTTPS:**
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**Force WWW or Non-WWW:**
```apache
# Force WWW
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]

# OR Force Non-WWW
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

**Custom Error Pages:**
```apache
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html
```

### **5. Setup Email Forwarding**

1. In Hostinger panel, go to **"Email"**
2. Click "Create Email Account"
3. Create: info@yourdomain.com, support@yourdomain.com
4. Or setup email forwarding to your Gmail

---

## ✅ **Pre-Deployment Checklist**

Before uploading, verify:

- [ ] All HTML files present and working locally
- [ ] CSS file properly linked
- [ ] JavaScript file properly linked
- [ ] All images optimized and uploaded
- [ ] Form action URL configured
- [ ] Contact information updated
- [ ] Social media links updated
- [ ] No broken internal links
- [ ] All files use relative paths (not absolute)
- [ ] Remove any test files (form-test.html)

---

## 🔧 **Troubleshooting**

### **Website Shows 404 Error**
- Verify index.html is in public_html root
- Check file permissions (should be 644 for files, 755 for folders)
- Clear browser cache (Ctrl+F5)

### **CSS/JS Not Loading**
- Check file paths in HTML (should be relative: `css/style.css`)
- Verify CSS and JS folders uploaded correctly
- Check file permissions
- Clear browser cache

### **Images Not Showing**
- Verify images folder uploaded
- Check image paths in HTML and CSS
- Ensure image filenames match exactly (case-sensitive)
- Optimize large images (compress before upload)

### **Form Not Working**
- Verify Formspree endpoint configured
- Check browser console for errors (F12)
- Test with form-test.html first
- Verify email settings in Formspree

### **Domain Not Working**
- Check nameservers configured correctly
- Wait 24-48 hours for DNS propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows)

### **SSL Not Working**
- Wait 10-15 minutes after installation
- Force HTTPS using .htaccess
- Clear browser cache and try incognito mode

---

## 📊 **Performance Optimization**

### **1. Image Optimization**
Before upload, compress images:
- Use [TinyPNG.com](https://tinypng.com/)
- Or [Squoosh.app](https://squoosh.app/)
- Target: Under 200KB per image

### **2. Enable Caching**
Add to `.htaccess`:
```apache
# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### **3. Enable Gzip Compression**
Add to `.htaccess`:
```apache
# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## 📱 **Testing Checklist**

After deployment, test:

- [ ] Homepage loads (index.html)
- [ ] All navigation links work
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] CSS styling displays properly
- [ ] JavaScript functions work
- [ ] Images display correctly
- [ ] Mobile responsive design
- [ ] Desktop view
- [ ] Contact links work (email, phone, WhatsApp)
- [ ] Social media links work
- [ ] Footer links work
- [ ] SSL certificate active (HTTPS)

---

## 🎯 **Quick Deployment Summary**

1. **Login to Hostinger** → Hosting Panel
2. **Open File Manager** → Navigate to public_html
3. **Clear public_html** → Delete existing files
4. **Upload ZIP** → Upload your agl-services.zip
5. **Extract ZIP** → Right-click > Extract
6. **Move files** → Move all files to public_html root
7. **Set permissions** → 755 for folders, 644 for files
8. **Test website** → Visit your domain
9. **Configure form** → Add Formspree endpoint
10. **Enable SSL** → Install free SSL certificate

---

## 🆘 **Need Help?**

### **Hostinger Support**
- Live Chat: 24/7 available in your hosting panel
- Email: support@hostinger.com
- Knowledge Base: [support.hostinger.com](https://support.hostinger.com)

### **Common Hostinger URLs**
- Hosting Panel: https://hpanel.hostinger.com
- Webmail: https://webmail.hostinger.com
- File Manager: Access through hPanel

---

## 📈 **After Launch**

1. **Submit to Google Search Console**
   - Verify your domain
   - Submit sitemap
   - Monitor indexing

2. **Setup Google Analytics**
   - Create GA4 property
   - Add tracking code to all pages

3. **Monitor Performance**
   - Use Hostinger's built-in analytics
   - Check uptime and speed
   - Monitor form submissions

4. **Regular Backups**
   - Enable automatic backups in Hostinger
   - Download backup copy monthly
   - Keep local copy of all files

---

**🎉 Your website is now live! Visit your domain to see it online!**

**Questions?** Check Hostinger's 24/7 live chat support for immediate help.
