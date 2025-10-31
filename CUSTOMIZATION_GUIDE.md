<!-- CUSTOMIZATION TEMPLATE - Copy & Paste Reference -->

## COLOR PALETTE REPLACEMENTS

If you want to change colors, use Find & Replace in your code editor:

### Find & Replace These Hex Codes:

```
FIND:        REPLACE WITH:
#0056D2  →   YOUR_PRIMARY_COLOR      (Royal Blue currently)
#0046A5  →   YOUR_DARK_COLOR         (Dark Blue currently)
#007BFF  →   YOUR_ACCENT_COLOR       (Light Blue currently)
#FFFFFF  →   #FFFFFF                 (Keep White)
#222222  →   YOUR_TEXT_COLOR         (Dark Gray)
#F5F5F5  →   YOUR_LIGHT_BG_COLOR     (Light Gray)
```

### Color Suggestions:

**Professional Blue:** #0056D2 (Current) ✓
**Professional Green:** #1B7F3C
**Professional Purple:** #6B21A8
**Professional Red:** #DC2626
**Professional Teal:** #0891B2

---

## BRAND TEXT REPLACEMENTS

Use Ctrl+H (Find & Replace) in your editor:

```
FIND:                          REPLACE WITH:
AdsGeniusLab             →      YOUR_COMPANY_NAME
info@adsgeniuslab.com    →      your-email@yourcompany.com
+1 (234) 567-890         →      YOUR_ACTUAL_PHONE
1234567890               →      YOUR_PHONE_NUMBER_DIGITS
123 Marketing Street     →      YOUR_STREET_ADDRESS
Digital City, DC 10001   →      YOUR_CITY, STATE ZIP
United States            →      YOUR_COUNTRY
```

---

## FONT FAMILY CHANGES

### Current Fonts (in css/style.css):
```css
font-family: 'Poppins', sans-serif;         /* Body text */
font-family: 'Montserrat', sans-serif;      /* Headings */
```

### Alternative Font Combinations:

**Modern Professional:**
```css
font-family: 'Inter', sans-serif;           /* Body */
font-family: 'Plus Jakarta Sans', sans-serif; /* Headings */
```

**Clean & Simple:**
```css
font-family: 'Open Sans', sans-serif;       /* Body */
font-family: 'Roboto', sans-serif;          /* Headings */
```

**Premium & Elegant:**
```css
font-family: 'Lato', sans-serif;            /* Body */
font-family: 'Raleway', sans-serif;         /* Headings */
```

**To Change:**
1. Edit `css/style.css` line 8-9
2. Update @import statement with new fonts from Google Fonts
3. Update font-family properties

---

## HERO SECTION CUSTOMIZATION

### Change Hero Text (in all HTML files):

**Current:**
```html
<h1>Transform Your Business with <span class="text-gradient">Digital Excellence</span></h1>
<p>Cutting-edge digital marketing solutions...</p>
```

**Your Version:**
```html
<h1>Your Main Headline Here</h1>
<p>Your compelling description here...</p>
```

### Change CTA Buttons:

**Current:**
```html
<a href="consultation.html" class="btn-primary-custom">
  <i class="fas fa-rocket"></i> Get Started Today
</a>
```

**Change to:**
```html
<a href="consultation.html" class="btn-primary-custom">
  <i class="fas fa-[icon-name]"></i> Your Button Text
</a>
```

**Icon options:** https://fontawesome.com/icons (use icon name, e.g., "phone", "envelope", "thumbs-up")

---

## SERVICE CARDS CUSTOMIZATION

### Location: services.html (around line 60)

**Current:**
```html
<div class="service-card" id="seo">
  <div class="service-icon">
    <i class="fas fa-search"></i>
  </div>
  <h3>SEO Optimization</h3>
  <p>Boost your online visibility...</p>
  <ul>
    <li>Keyword research & analysis</li>
    <li>On-page optimization</li>
  </ul>
</div>
```

**Your Version:**
```html
<div class="service-card" id="your-service">
  <div class="service-icon">
    <i class="fas fa-your-icon"></i>  <!-- Change icon -->
  </div>
  <h3>Your Service Name</h3>
  <p>Your service description...</p>
  <ul>
    <li>Your benefit 1</li>
    <li>Your benefit 2</li>
    <li>Your benefit 3</li>
    <li>Your benefit 4</li>
  </ul>
</div>
```

---

## PRICING TIER CUSTOMIZATION

### Location: services.html (around line 200)

**Current:**
```html
<h2 style="color: white; font-size: 2.5rem; margin-bottom: 0;">$499</h2>
<p style="font-size: 0.9rem; margin-bottom: 0;">/month</p>
```

**Your Pricing:**
```html
<h2 style="color: white; font-size: 2.5rem; margin-bottom: 0;">$[YOUR_PRICE]</h2>
<p style="font-size: 0.9rem; margin-bottom: 0;">/month</p>
```

### Update Features List:
```html
<li style="padding: 0.8rem 0; border-bottom: 1px solid #eee;">
  <i class="fas fa-check" style="color: #0056D2; margin-right: 0.5rem;"></i> Your Feature
</li>
```

---

## TEAM MEMBER CUSTOMIZATION

### Location: about.html (around line 130)

**Current:**
```html
<h4 style="color: #0046A5; margin-bottom: 0.5rem;">Sarah Johnson</h4>
<p style="font-size: 0.95rem; color: #007BFF; font-weight: 600;">Founder & CEO</p>
<p style="font-size: 0.9rem; color: #666;">Strategic visionary with 12+ years...</p>
```

**Your Team Member:**
```html
<h4 style="color: #0046A5; margin-bottom: 0.5rem;">Team Member Name</h4>
<p style="font-size: 0.95rem; color: #007BFF; font-weight: 600;">Their Role/Position</p>
<p style="font-size: 0.9rem; color: #666;">Their bio/description...</p>
```

---

## FOOTER LINKS CUSTOMIZATION

### Update Social Media Links

**Current in footer:**
```html
<a href="https://whatsapp.com" target="_blank" title="WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
```

**Your Links:**
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" title="WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
<a href="https://facebook.com/YOUR_PAGE" target="_blank" title="Facebook">
  <i class="fab fa-facebook-f"></i>
</a>
<a href="https://linkedin.com/company/YOUR_COMPANY" target="_blank" title="LinkedIn">
  <i class="fab fa-linkedin-in"></i>
</a>
<a href="https://instagram.com/YOUR_HANDLE" target="_blank" title="Instagram">
  <i class="fab fa-instagram"></i>
</a>
```

---

## TESTIMONIALS SECTION (Add New Section)

Add this section between Services and Call-to-Action:

```html
<!-- TESTIMONIALS SECTION -->
<section style="background-color: var(--light-gray); padding: 100px 0;">
  <div class="container">
    <div class="section-title">
      <h2>What Our Clients Say</h2>
      <div class="title-underline"></div>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.08);">
          <div style="color: #FFA500; margin-bottom: 1rem;">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p style="font-style: italic; margin-bottom: 1.5rem;">"Your team transformed our digital presence. Highly recommended!"</p>
          <p style="font-weight: 600; margin-bottom: 0;">- Client Name, Company</p>
        </div>
      </div>
      <!-- Repeat for more testimonials -->
    </div>
  </div>
</section>
```

---

## FORM FIELD CUSTOMIZATION

### Location: consultation.html (around line 60)

**Add New Field:**
```html
<div class="form-group">
  <label for="field-name" class="form-label">Field Label</label>
  <input type="text" class="form-control" id="field-name" name="field_name" placeholder="Placeholder text">
</div>
```

**Remove Field:**
Simply delete the entire `<div class="form-group">` section

### Available Input Types:
```html
type="text"              <!-- Single line text -->
type="email"             <!-- Email validation -->
type="tel"               <!-- Phone number -->
type="number"            <!-- Numbers only -->
type="date"              <!-- Date picker -->
type="textarea"          <!-- Multi-line text -->
select                   <!-- Dropdown menu -->
type="checkbox"          <!-- Checkboxes -->
type="radio"             <!-- Radio buttons -->
```

---

## SEO CUSTOMIZATION

### Update Meta Tags (In `<head>` of each HTML file):

```html
<!-- Update page description -->
<meta name="description" content="Your unique page description here">

<!-- Add keywords -->
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Update page title -->
<title>Your Page Title - Your Company</title>
```

**Good Descriptions:**
- Home: "Premium digital marketing solutions | AdsGeniusLab"
- Services: "Digital marketing services: SEO, social media, content strategy | AdsGeniusLab"
- Contact: "Get in touch with our digital marketing experts | AdsGeniusLab"

---

## RESPONSIVE DESIGN TWEAKS

### Adjust Mobile Padding (css/style.css):

**Current:**
```css
section {
  padding: 100px 0;
}

@media (max-width: 576px) {
  section {
    padding: 40px 0;
  }
}
```

**More Spacing:**
```css
@media (max-width: 576px) {
  section {
    padding: 60px 0;
  }
}
```

### Adjust Font Sizes on Mobile:

```css
@media (max-width: 576px) {
  h1 {
    font-size: 1.8rem;  /* Adjust as needed */
  }
  p {
    font-size: 0.95rem;
  }
}
```

---

## ANIMATION CUSTOMIZATION

### Adjust Animation Speed (css/style.css):

**Current (0.8s):**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.8s ease-out;
}
```

**Faster (0.5s):**
```css
animation: fadeInUp 0.5s ease-out;
```

**Slower (1.2s):**
```css
animation: fadeInUp 1.2s ease-out;
```

---

## QUICK REFERENCE: Icon Names

**Common Icons** (use with `<i class="fas fa-[name]"></i>`):

```
fa-phone              <!-- Phone icon -->
fa-envelope           <!-- Email icon -->
fa-map-marker-alt     <!-- Location icon -->
fa-rocket             <!-- Rocket icon -->
fa-chart-line         <!-- Chart icon -->
fa-users              <!-- People icon -->
fa-handshake          <!-- Handshake icon -->
fa-lightbulb          <!-- Idea icon -->
fa-check              <!-- Checkmark -->
fa-star               <!-- Star -->
fa-arrow-right        <!-- Arrow right -->
fa-search             <!-- Search/magnifying glass -->
fa-share-alt          <!-- Share icon -->
fa-pen-fancy          <!-- Writing/content -->
fa-bullhorn           <!-- Announcement/advertising -->
fa-gem                <!-- Premium/branding -->
fa-chart-bar          <!-- Analytics/reports -->
```

Full list: https://fontawesome.com/icons

---

## DEPLOYMENT CHECKLIST

After customization, verify:

- [ ] Company name replaced everywhere
- [ ] Contact info updated
- [ ] Formspree Form IDs added
- [ ] All pages tested locally
- [ ] Mobile view tested
- [ ] All links working
- [ ] Forms sending emails
- [ ] Images optimized (if added)
- [ ] Ready for upload to Hostinger

---

**Good luck with your customization! 🎨✨**
