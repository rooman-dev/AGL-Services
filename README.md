# AdsGeniusLab - Professional Digital Marketing Website

A premium, responsive digital marketing website built with HTML5, CSS3, Bootstrap 5, and JavaScript. Designed for Hostinger hosting with Formspree form integration.

## 📁 Project Structure

```
# 🚀 AGL Services - Digital Marketing Website

Modern, professional website for AdsGeniusLab digital marketing services.

---

## 📋 Quick Links

### 🔧 Setup & Deployment
- **[Quick Deploy Guide](QUICK_DEPLOY_GUIDE.md)** - 10-minute Hostinger deployment
- **[Full Deployment Guide](HOSTINGER_DEPLOYMENT_GUIDE.md)** - Complete deployment documentation
- **[Deployment Checklist](DEPLOYMENT_CHECKLIST.md)** - Pre and post-deployment checklist
- **[Form Setup Guide](FORM_SETUP_GUIDE.md)** - Configure consultation form

### 📖 Documentation
- **[Customization Guide](CUSTOMIZATION_GUIDE.md)** - How to customize the website
- **[Troubleshooting Guide](TROUBLESHOOTING.md)** - Common issues and fixes

---

## 🎯 What's Included

### Pages
- ✅ **Homepage** (index.html) - Hero, features, stats, CTA
- ✅ **About** (about.html) - Company information
- ✅ **Services** (services.html) - Service offerings
- ✅ **Consultation** (consultation.html) - Free consultation form
- ✅ **Contact** (contact.html) - Contact information & form

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern gradient design with professional color scheme
- ✅ Interactive consultation form with validation
- ✅ Smooth scroll animations
- ✅ WhatsApp, Email, Phone integration
- ✅ Social media links
- ✅ SEO optimized structure
- ✅ Fast loading performance
- ✅ Cross-browser compatible

---

## 🚀 Deployment to Hostinger

### Method 1: File Manager (Easiest)
1. Login to [Hostinger hPanel](https://hpanel.hostinger.com)
2. Open **File Manager**
3. Navigate to **public_html**
4. Upload your ZIP file
5. Extract and move files to root
6. Done! Visit your domain

👉 **[See Full Guide](QUICK_DEPLOY_GUIDE.md)**

### Method 2: FTP (FileZilla)
1. Get FTP credentials from Hostinger
2. Connect with FileZilla
3. Upload files to public_html
4. Set proper permissions

👉 **[See Detailed Steps](HOSTINGER_DEPLOYMENT_GUIDE.md#method-2-ftp-filezilla)**

### Method 3: Git Deployment
1. Push code to GitHub
2. Connect Hostinger to GitHub
3. Auto-deploy on every push

👉 **[See Git Setup](HOSTINGER_DEPLOYMENT_GUIDE.md#method-3-git-deployment-advanced)**

---

## 📧 Form Configuration

After deployment, configure the consultation form:

1. Sign up at [Formspree.io](https://formspree.io) (free)
2. Create new form and get form ID
3. Edit `consultation.html` line 78:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID
5. Test form submission

**Alternative Options:**
- EmailJS (client-side)
- Google Apps Script (unlimited free)

👉 **[See Complete Form Setup](FORM_SETUP_GUIDE.md)**

---

## 📁 File Structure

```
AGL-Services/
│
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── consultation.html       # Consultation form
├── contact.html            # Contact page
├── form-test.html          # Form testing page
│
├── css/
│   └── style.css          # All styles
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── images/                # Image assets
│
├── .htaccess              # Server configuration
│
└── Documentation/
    ├── README.md
    ├── QUICK_DEPLOY_GUIDE.md
    ├── HOSTINGER_DEPLOYMENT_GUIDE.md
    ├── FORM_SETUP_GUIDE.md
    └── DEPLOYMENT_CHECKLIST.md
```

---

## 🎨 Design System (v2.0 - Modern Update)

### Color Palette
- **Primary Dark:** #0A1628 - Deep navy for headlines
- **Accent Blue:** #2563EB - Vibrant blue for CTAs
- **Text Primary:** #111827 - High contrast body text
- **Text Secondary:** #6B7280 - Descriptive text
- **Light Background:** #F9FAFB - Clean sections
- **White:** #FFFFFF - Card backgrounds

### Typography
- **Headings:** Manrope (700-800 weight) - Modern geometric sans
- **Body:** Inter (400-600 weight) - Highly readable UI font
- **Tight letter-spacing** on headlines (-0.02em to -0.03em)
- Fully responsive font sizing

### Design Principles
- ✨ **Clean & Professional** - Sharp borders (12px radius), subtle shadows
- ✨ **Modern Aesthetic** - Bold typography, ample white space
- ✨ **Data-Driven** - Numbers and results prominently displayed
- ✨ **Accessible** - WCAG AA compliant color contrasts
- ✨ **Restrained Animations** - Subtle, professional interactions

👉 **[See Complete Design System](DESIGN_SYSTEM.md)**

---

## ✅ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS, Android)

---

## 📱 Contact Information

Update these in all HTML files:

- **Email:** adsgeniuslab@gmail.com
- **Phone:** +92 318 1292628
- **WhatsApp:** https://wa.me/923181292628
- **Social Media:** Update links in footer

---

## 🔧 Customization

### Update Colors
Edit `css/style.css` CSS variables (lines 8-18):
```css
:root {
  --primary-blue: #0056D2;
  --dark-blue: #003D99;
  --light-blue: #3B82F6;
  /* etc. */
}
```

### Update Content
Edit HTML files directly:
- **index.html** - Homepage content
- **about.html** - Company info
- **services.html** - Service descriptions
- **consultation.html** - Form fields
- **contact.html** - Contact details

### Add Images
1. Add images to `images/` folder
2. Reference in HTML: `<img src="images/your-image.jpg">`
3. Optimize before upload (TinyPNG.com)

---

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling & animations
- **JavaScript** - Interactivity
- **Bootstrap 5** - Responsive grid
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography

---

## 📊 Performance

- ✅ Fast loading (< 2 seconds)
- ✅ Optimized images
- ✅ Minified code ready
- ✅ Browser caching enabled
- ✅ Gzip compression ready
- ✅ Mobile optimized

---

## 🔒 Security Features

- ✅ HTTPS/SSL ready
- ✅ Form validation
- ✅ XSS protection headers
- ✅ Secure file permissions
- ✅ Protected sensitive files
- ✅ .htaccess security rules

---

## 🆘 Support & Help

### Documentation
- All guides in root folder
- Step-by-step instructions
- Troubleshooting tips included

### Hostinger Support
- **Live Chat:** 24/7 in hPanel
- **Email:** support@hostinger.com
- **Knowledge Base:** support.hostinger.com

### Common Issues
See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for:
- 404 errors
- CSS not loading
- Images not showing
- Form not working
- SSL issues

---

## 📈 Post-Launch

### SEO Setup
1. Submit to Google Search Console
2. Create sitemap.xml
3. Add meta descriptions
4. Setup Google Analytics

### Marketing
1. Share on social media
2. Update business listings
3. Email signature link
4. WhatsApp status update

### Maintenance
1. Regular backups (monthly)
2. Update content quarterly
3. Monitor form submissions
4. Check analytics weekly

---

## 📄 License

This project is proprietary and confidential.
© 2025 AdsGeniusLab. All rights reserved.

---

## 🎉 Getting Started

1. **Read:** [QUICK_DEPLOY_GUIDE.md](QUICK_DEPLOY_GUIDE.md)
2. **Deploy:** Follow 10-minute guide
3. **Configure:** Setup form with Formspree
4. **Test:** Visit your domain
5. **Launch:** Share with the world!

---

**Questions?** Check the guides or contact Hostinger support!

**Ready to deploy?** Start with [QUICK_DEPLOY_GUIDE.md](QUICK_DEPLOY_GUIDE.md) 🚀/
├── index.html                 # Home page
├── about.html                 # About us page
├── services.html              # Services & pricing page
├── consultation.html          # Consultation request form
├── contact.html               # Contact page
├── css/
│   └── style.css              # Main stylesheet with theme & responsive design
├── js/
│   └── script.js              # JavaScript for interactivity & form validation
└── images/                    # Folder for images and assets
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue:** #0056D2
- **Dark Blue:** #0046A5
- **Light Blue:** #007BFF
- **White:** #FFFFFF
- **Text Gray:** #222222

### Typography
- **Font Family:** Poppins (primary), Montserrat (headings)
- **Headings:** Bold, Large (48px-56px on desktop)
- **Body Text:** 18-20px for easy readability
- **Line Height:** 1.8+ for comfort

### Key Design Elements
✅ Gradient backgrounds (hero & service cards)
✅ Royal blue & white premium theme
✅ Sticky navigation bar
✅ Smooth scroll animations
✅ Responsive grid layouts
✅ Hover effects on buttons & cards
✅ Professional footer with contact links
✅ Mobile-optimized design

## 📱 Pages Included

### 1. **Home (index.html)**
- Hero section with CTA buttons
- Features showcase
- Statistics section
- Call-to-action section

### 2. **About (about.html)**
- Company information
- Mission & Vision
- Core values
- Team members section

### 3. **Services (services.html)**
- 6 service cards with detailed descriptions
- 3 pricing packages (Starter, Professional, Enterprise)
- Service comparison

### 4. **Consultation (consultation.html)**
- Consultation request form (Formspree integrated)
- Form fields: Name, Email, Phone, Company, Service, Budget, Message
- Benefits section

### 5. **Contact (contact.html)**
- Contact information cards
- General contact form (Formspree integrated)
- Business hours
- Map placeholder section

## 🔧 Setup Instructions

### 1. Download & Extract
- Download all files and maintain the folder structure
- Keep CSS, JS, and HTML files in their respective folders

### 2. Formspree Integration (IMPORTANT)

#### For Consultation Form:
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and name it "Consultation"
4. Copy your Form ID (e.g., `f_abc123xyz`)
5. Open `consultation.html` and replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   With your actual form ID:
   ```html
   <form action="https://formspree.io/f/f_abc123xyz" method="POST">
   ```
6. Verify your email in Formspree

#### For Contact Form:
1. Create another form in Formspree named "Contact"
2. Copy the Form ID
3. Open `contact.html` and replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   With your form ID

#### To Receive Emails:
1. Go to Formspree dashboard
2. Settings → Recipients
3. Add your company email address
4. Confirm the verification email

### 3. Update Contact Information
Replace placeholder contact details throughout the website:

- **Phone:** `+1234567890` → Your actual phone number
- **Email:** `info@adsgeniuslab.com` → Your company email
- **WhatsApp:** `1234567890` → Your WhatsApp number (without + or spaces)
- **Address:** `123 Marketing Street` → Your actual address

**Files to update:**
- `index.html` - Footer contact links
- `about.html` - Footer contact links
- `services.html` - Footer contact links
- `consultation.html` - Footer & direct contact buttons
- `contact.html` - Contact information cards & footer

### 4. Update Social Media Links
Replace social media URLs in footer:
- Facebook: `https://facebook.com/yourpage`
- LinkedIn: `https://linkedin.com/company/yourcompany`
- Instagram: `https://instagram.com/yourprofile`
- WhatsApp: `https://wa.me/yourphonenumber`

## 🚀 Uploading to Hostinger

### Via File Manager (Easiest):
1. Log in to Hostinger cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload all folders and files maintaining structure:
   - Upload `index.html`, `about.html`, `services.html`, `consultation.html`, `contact.html`
   - Upload `css` folder
   - Upload `js` folder
   - Upload `images` folder (when you add images)

### Via FTP:
1. Use FileZilla or similar FTP client
2. Connect to your Hostinger FTP credentials
3. Upload files to `/public_html` maintaining folder structure

### Important Notes:
- Ensure all file paths are relative (they are by default)
- Keep the folder structure intact
- Test all forms after upload
- Clear browser cache if changes don't appear

## 📝 Customization Guide

### Change Colors
Open `css/style.css` and modify the CSS variables at the top:
```css
:root {
  --primary-blue: #0056D2;     /* Change primary color */
  --dark-blue: #0046A5;        /* Change dark accent */
  --light-blue: #007BFF;       /* Change light accent */
  /* ... etc */
}
```

### Add Images
1. Place images in the `images` folder
2. Update image paths in HTML files
3. Example: `<img src="images/your-image.jpg" alt="Description">`

### Modify Typography
Edit font sizes in `css/style.css`:
- Line 49-75: Heading styles (h1, h2, h3, etc.)
- Line 76-85: Paragraph and text styles

### Add More Pages
1. Create a new `.html` file
2. Copy navbar and footer from existing pages
3. Update the navigation links
4. Style with existing CSS classes

## 🔒 Form Validation

The website includes built-in form validation:
- Required field validation
- Email format validation
- Real-time feedback on form fields
- Bootstrap validation styles

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

All sections adapt automatically for smaller screens.

## ⚡ Performance Tips

1. Optimize images before uploading (compress to <500KB)
2. Use CDN versions (Bootstrap & FontAwesome already use CDN)
3. Minify CSS/JS for production (optional)
4. Enable GZIP compression in Hostinger settings

## 🔐 Security

- HTTPS enabled by default on Hostinger
- Forms use Formspree (encrypted transmission)
- No backend server required
- Static HTML/CSS/JS - no database vulnerabilities

## 🐛 Troubleshooting

### Forms not working:
- Verify Formspree Form ID is correct
- Check email verification in Formspree
- Ensure `method="POST"` in form tag

### Styles not loading:
- Clear browser cache (Ctrl+Shift+Delete)
- Verify CSS file path is correct
- Check file permissions on server

### Navigation not working:
- Verify HTML file names match links
- Check relative paths start with `./` or no `./`

### Mobile menu not working:
- Ensure Bootstrap JS is loaded
- Check browser console for JavaScript errors

## 📞 Support

For Formspree issues: https://formspree.io/support
For Hostinger support: https://hostinger.com/support

## 📄 File Sizes

Keep these in mind for Hostinger limits:
- HTML files: ~50-80KB each
- CSS: ~80KB
- JavaScript: ~20KB
- Total base: ~400KB (before images)

## 🎯 Recommendations

1. Add a favicon to `<head>` section of all pages
2. Add Google Analytics for tracking
3. Add SSL certificate (Hostinger provides free)
4. Enable caching in Hostinger settings
5. Add robots.txt for SEO
6. Create sitemap.xml for better indexing

## 📋 Checklist Before Going Live

- [ ] All contact information updated
- [ ] Formspree forms configured with correct Form IDs
- [ ] Email addresses verified in Formspree
- [ ] Social media links updated
- [ ] All pages tested on mobile
- [ ] All forms tested (send test submissions)
- [ ] Footer links tested
- [ ] Navigation works on all pages
- [ ] Website loads on different browsers
- [ ] SSL certificate enabled
- [ ] Hostinger email notifications setup

## 🎓 Learning Resources

- Bootstrap 5 Docs: https://getbootstrap.com/docs/5.3/
- Formspree Docs: https://formspree.io/docs
- MDN Web Docs: https://developer.mozilla.org/
- Google Fonts: https://fonts.google.com/

## 📄 License

This website template is created for AdsGeniusLab. Feel free to customize for your business needs.

---

**Version:** 1.0
**Last Updated:** 2025
**Compatibility:** All modern browsers, fully responsive
