# 📋 Consultation Form Setup Guide

Your consultation form is now ready! Here are **3 methods** to make it fully functional:

---

## ✅ **Method 1: Formspree (Recommended - Easiest)**

**Best for:** Quick setup, no backend required, free tier available

### Steps:
1. **Go to [Formspree.io](https://formspree.io)**
2. **Sign up** for a free account
3. **Create a new form** and get your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
4. **Update `consultation.html`** line 78:
   ```html
   <form id="consultationForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

5. **That's it!** Your form will now send submissions to your email

### Formspree Features:
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Dashboard to view submissions
- ✅ 50 submissions/month on free plan
- ✅ Works immediately

---

## ✅ **Method 2: EmailJS (Free Alternative)**

**Best for:** Client-side email sending without backend

### Steps:
1. **Go to [EmailJS.com](https://www.emailjs.com)**
2. **Create account** and set up email service (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Add this script** to `consultation.html` before closing `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
     emailjs.init('YOUR_PUBLIC_KEY');
   </script>
   ```

5. **Update `js/script.js`** - Replace the `handleFormSubmit` function with:
   ```javascript
   async function handleFormSubmit(form) {
     const submitButton = form.querySelector('button[type="submit"]');
     const originalButtonText = submitButton.innerHTML;
     
     submitButton.disabled = true;
     submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

     const formData = {
       name: form.name.value,
       email: form.email.value,
       phone: form.phone.value,
       company: form.company.value,
       service: form.service.value,
       message: form.message.value,
       contact_method: form.contact_method.value
     };

     try {
       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
       showSuccessMessage(form);
       form.reset();
       form.classList.remove('was-validated');
     } catch (error) {
       showErrorMessage(form);
     } finally {
       submitButton.disabled = false;
       submitButton.innerHTML = originalButtonText;
     }
   }
   ```

6. **Replace:**
   - `YOUR_PUBLIC_KEY` with your EmailJS public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

---

## ✅ **Method 3: Google Apps Script (100% Free)**

**Best for:** Complete control, unlimited submissions, uses Google Sheets

### Steps:

1. **Create a Google Sheet** to store form submissions

2. **Open Script Editor** (Extensions > Apps Script)

3. **Paste this code:**
   ```javascript
   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const data = e.parameter;
       
       // Add submission to sheet
       sheet.appendRow([
         new Date(),
         data.name,
         data.email,
         data.phone,
         data.company,
         data.service,
         data.message,
         data.contact_method
       ]);
       
       // Send email notification
       MailApp.sendEmail({
         to: 'adsgeniuslab@gmail.com',
         subject: '🔔 New Consultation Request - ' + data.name,
         body: `
           New consultation request received:
           
           Name: ${data.name}
           Email: ${data.email}
           Phone: ${data.phone}
           Company: ${data.company}
           Service: ${data.service}
           Message: ${data.message}
           Contact Method: ${data.contact_method}
           
           Submitted at: ${new Date()}
         `
       });
       
       return ContentService.createTextOutput(JSON.stringify({
         status: 'success',
         message: 'Form submitted successfully'
       })).setMimeType(ContentService.MimeType.JSON);
       
     } catch (error) {
       return ContentService.createTextOutput(JSON.stringify({
         status: 'error',
         message: error.toString()
       })).setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

4. **Deploy as Web App:**
   - Click "Deploy" > "New deployment"
   - Choose "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Click "Deploy"
   - Copy the web app URL

5. **Update `consultation.html`** line 78:
   ```html
   <form id="consultationForm" action="YOUR_GOOGLE_SCRIPT_URL" method="POST">
   ```

6. **Add headers to Google Sheet:**
   ```
   Date | Name | Email | Phone | Company | Service | Message | Contact Method
   ```

---

## 🎯 **Quick Comparison**

| Feature | Formspree | EmailJS | Google Script |
|---------|-----------|---------|---------------|
| Setup Time | 5 mins | 10 mins | 15 mins |
| Free Tier | 50/month | 200/month | Unlimited |
| Backend Required | No | No | No |
| Data Storage | Dashboard | No | Google Sheets |
| Spam Protection | Yes | No | Custom |
| Difficulty | ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Advanced |

---

## 📧 **Current Email Configuration**

Your form currently sends to:
- **Email:** adsgeniuslab@gmail.com
- **Phone:** +92 318 1292628
- **WhatsApp:** https://wa.me/923181292628

---

## 🔥 **What's Already Included**

Your form already has:
- ✅ **Client-side validation** - Real-time field validation
- ✅ **Required field checking** - Ensures all necessary fields are filled
- ✅ **Email format validation** - Validates email addresses
- ✅ **Loading states** - Shows spinner while submitting
- ✅ **Success/Error messages** - User feedback after submission
- ✅ **Form reset** - Clears form after successful submission
- ✅ **Responsive design** - Works on all devices
- ✅ **Accessibility** - Proper labels and ARIA attributes

---

## 🚀 **Testing Your Form**

After setup:

1. **Fill out all required fields**
2. **Click submit**
3. **Check for success message**
4. **Verify email received** (check spam folder)

---

## 🛠️ **Troubleshooting**

**Form doesn't submit?**
- Check browser console for errors (F12)
- Verify form action URL is correct
- Check internet connection

**Not receiving emails?**
- Check spam/junk folder
- Verify email address is correct
- Check service dashboard/logs

**Validation errors?**
- Ensure all required fields have values
- Check email format is valid
- Accept terms and conditions

---

## 📞 **Need Help?**

If you need assistance with setup:
1. Check the service documentation (Formspree/EmailJS/Google)
2. Test with a simple form first
3. Review browser console for error messages
4. Contact the service support team

---

## 🎨 **Customization**

To customize form behavior, edit:
- **Form fields:** `consultation.html` (lines 78-183)
- **Validation rules:** `js/script.js` (lines 32-100)
- **Success/Error messages:** `js/script.js` (lines 134-177)
- **Styling:** `css/style.css` (search for ".consultation")

---

**Recommendation:** Start with **Formspree** for the quickest setup. You can always switch to another method later!
