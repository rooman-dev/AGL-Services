# AdsGeniusLab Website - Quick Reference Card

## 📋 File Checklist

Print this or bookmark it!

### 5 HTML Pages
- [ ] index.html (Home page)
- [ ] about.html (About page)
- [ ] services.html (Services & pricing)
- [ ] consultation.html (Booking form)
- [ ] contact.html (Contact page)

### Folders & Files
- [ ] css/style.css (Main stylesheet)
- [ ] js/script.js (JavaScript)
- [ ] images/ (Folder for images)

### Documentation
- [ ] README.md (Full documentation)
- [ ] QUICK_SETUP.md (5-min setup)
- [ ] CUSTOMIZATION_GUIDE.md (How to customize)
- [ ] SETUP_SUMMARY.md (Overview)
- [ ] TROUBLESHOOTING.md (Problem solving)

---

## 🔧 Critical Find & Replace

Do these FIRST before uploading:

### In Formspree
1. Copy Consultation Form ID from formspree.io
2. Copy Contact Form ID from formspree.io

### In Your Code
**Search in consultation.html:**
```
Find:    YOUR_FORM_ID
Replace: f_YOUR_ACTUAL_CONSULTATION_ID
```

**Search in contact.html:**
```
Find:    YOUR_FORM_ID
Replace: f_YOUR_ACTUAL_CONTACT_ID
```

**Search in ALL files:**
```
Find:    +1234567890
Replace: YOUR_PHONE_NUMBER

Find:    info@adsgeniuslab.com
Replace: YOUR_EMAIL@COMPANY.COM

Find:    1234567890 (in WhatsApp links)
Replace: YOUR_PHONE_WITHOUT_PLUS
```

---

## 🎨 Color Codes

Copy these to customize colors:

```
Primary Blue:    #0056D2
Dark Blue:       #0046A5
Light Blue:      #007BFF
White:           #FFFFFF
Dark Gray:       #222222
Light Gray:      #F5F5F5
```

---

## 📱 Responsive Breakpoints

```
Desktop:  1200px and up
Tablet:   768px - 1199px
Mobile:   Below 768px
```

---

## 🔗 Key URLs

### Formspree Setup
https://formspree.io/

### Hostinger
https://hostinger.com/ → Dashboard → cPanel → File Manager

### Upload Path
Domain → public_html/

### Your Site After Upload
https://yoursite.com/

---

## 📞 Contact Information Fields

**To Update Everywhere:**

| Item | Placeholder | Your Info |
|------|-------------|-----------|
| Phone | +1 (234) 567-890 | ________ |
| Email | info@adsgeniuslab.com | ________ |
| WhatsApp | 1234567890 | ________ |
| Address | 123 Marketing Street | ________ |
| City, State | Digital City, DC 10001 | ________ |
| Facebook | facebook.com | ________ |
| Instagram | instagram.com | ________ |
| LinkedIn | linkedin.com | ________ |

---

## ✅ Pre-Launch Checklist

### Setup (15 min)
- [ ] Created Formspree account
- [ ] Got Formspree Form IDs
- [ ] Updated Form IDs in HTML
- [ ] Updated contact information
- [ ] Updated social media links

### Testing (10 min)
- [ ] Tested all pages load
- [ ] Tested all navigation links
- [ ] Submitted test form
- [ ] Received test email
- [ ] Tested on mobile

### Deployment (5 min)
- [ ] Created Hostinger account
- [ ] Uploaded all files to public_html
- [ ] Verified website online
- [ ] Website fully functional

---

## 📝 Formspree Setup Steps

1. Go to https://formspree.io
2. Sign Up (free)
3. Create New Form → Name: "Consultation"
4. Copy Form ID (e.g., f_abc123xyz)
5. Add to consultation.html
6. Create New Form → Name: "Contact"
7. Copy Form ID
8. Add to contact.html
9. Verify your email in both forms
10. Set recipient email in form settings

---

## 🚀 Upload to Hostinger

1. Log in to Hostinger
2. Go to cPanel
3. Open File Manager
4. Navigate to public_html
5. Upload these files/folders:
   - index.html
   - about.html
   - services.html
   - consultation.html
   - contact.html
   - css/ (folder)
   - js/ (folder)
   - images/ (folder - empty is OK)
6. Wait 5 minutes
7. Visit yoursite.com
8. Test everything

---

## 🆘 3-Step Troubleshooting

### If Something's Broken

**Step 1: Clear Cache**
```
Windows: Ctrl + Shift + Delete
Then: Ctrl + F5
```

**Step 2: Check Browser Console**
```
Press: F12
Look for: Red error messages
```

**Step 3: Verify Uploaded Files**
```
Hostinger File Manager
Check: All files in public_html
Check: Folder structure correct
```

---

## 📊 Website Stats

- **Pages:** 5
- **Sections per page:** 3-5
- **Contact forms:** 2
- **Service cards:** 6
- **Pricing tiers:** 3
- **Team members:** 4
- **Total file size:** ~400KB (before images)
- **Bootstrap:** 5.3.0
- **Responsive:** Yes (100%)

---

## 🎯 Page Overview

| Page | Purpose | Forms |
|------|---------|-------|
| index.html | Home, hero, features, stats | No |
| about.html | Company info, team | No |
| services.html | 6 services, 3 pricing tiers | No |
| consultation.html | Booking form | 1 (Formspree) |
| contact.html | Contact info, form | 1 (Formspree) |

---

## 🔐 Security Notes

✅ No passwords stored
✅ No database
✅ No vulnerabilities
✅ HTTPS ready (Hostinger free SSL)
✅ Formspree encrypts submissions
✅ Static files only

---

## 💡 Tips & Tricks

### Add Your Logo
1. Save logo as: images/logo.png
2. Replace in navbar:
```html
<img src="images/logo.png" alt="Logo" style="height: 40px;">
```

### Change Button Text
Find `<a class="btn-primary-custom">` and edit text inside

### Add New Section
Copy any service card and paste below it, then edit

### Add Testimonials
Copy contact cards structure and adapt for testimonials

### Change Fonts
Edit css/style.css line 8-9 for different Google Fonts

---

## 📈 SEO Tips

- [ ] Add meta descriptions to each page
- [ ] Use semantic HTML (already done)
- [ ] Add alt text to images
- [ ] Enable Google Analytics
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Use keywords naturally

---

## 🎨 Design Elements

**Colors Used:**
- Primary Blue: All main elements
- Dark Blue: Headings, accents
- Light Blue: Borders, hover states
- White: Text on blue backgrounds
- Gray: Body text, backgrounds

**Fonts Used:**
- Poppins: Body text (regular, 400, 600)
- Montserrat: Headings (bold, 700, 800)

**Effects Used:**
- Gradients: Hero, buttons, cards
- Shadows: Card depth effect
- Hover: Scale transform on buttons
- Animations: Fade-in on scroll

---

## 🔄 Maintenance Schedule

- **Daily:** Check form submissions
- **Weekly:** Verify links work
- **Monthly:** Review analytics
- **Quarterly:** Update content
- **Annually:** Update copyright year

---

## 📞 Support Resources

| Issue | Resource |
|-------|----------|
| Formspree problems | https://formspree.io/support |
| Hostinger help | https://support.hostinger.com |
| Bootstrap docs | https://getbootstrap.com/docs |
| HTML/CSS/JS | https://developer.mozilla.org/ |
| Icons | https://fontawesome.com/ |
| Fonts | https://fonts.google.com/ |

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Formspree setup | 5 min |
| Update Form IDs | 2 min |
| Replace contact info | 3 min |
| Upload to Hostinger | 5 min |
| Test website | 5 min |
| **TOTAL** | **20 min** |

---

## 🎓 File Locations to Remember

```
Your site on Hostinger:
/public_html/index.html          ← Home page
/public_html/about.html          ← About page
/public_html/services.html       ← Services page
/public_html/consultation.html   ← Booking form
/public_html/contact.html        ← Contact page
/public_html/css/style.css       ← All styles
/public_html/js/script.js        ← All functions
/public_html/images/             ← Your images
```

---

## ✨ Final Reminders

✅ Keep folder structure intact
✅ Don't rename HTML files
✅ Add Form IDs before uploading
✅ Update contact info thoroughly
✅ Test everything before launch
✅ Clear browser cache if issues
✅ Verify emails from Formspree
✅ Enable SSL in Hostinger
✅ Make backups regularly
✅ Enjoy your new website! 🚀

---

**Print this page or screenshot it for quick reference!**

Good luck with your launch! 🎉

