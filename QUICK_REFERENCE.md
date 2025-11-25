# Quick Reference Guide

## 🎯 Common Tasks

### Add a New Blog Post (5 Minutes)
```bash
# 1. Copy template
cp blog-post-1.html blog-post-13.html

# 2. Edit blog-post-13.html:
#    - Change all instances of "1" to "13"
#    - Update title, date, content

# 3. Add to blog.html:
#    - Copy a blog card template
#    - Update href to "blog-post-13.html"
#    - Update title, excerpt, date

# 4. Commit
git add .
git commit -m "feat(blog): add blog post 13 - Title"
git push origin main
```

### Update Blog Post Content (2 Minutes)
```bash
# 1. Open blog-post-X.html
# 2. Find <div class="article-content">
# 3. Edit text/HTML inside
# 4. Save file
# 5. Commit & push
git add blog-post-X.html
git commit -m "fix(blog): update blog post X content"
git push origin main
```

### Change Blog Post Title (3 Minutes)
```bash
# 1. Update in blog-post-X.html:
#    <h1 data-i18n="blog_post_X_title">New Title</h1>

# 2. Update in pageTranslations (bottom of file):
#    'blog_post_X_title': 'New Title in English',
#    (and Arabic version)

# 3. Update in blog.html card:
#    <h3 data-i18n="blog_post_X_title">New Title</h3>

# 4. Commit & push
git add blog-post-X.html blog.html
git commit -m "fix(blog): update blog post X title"
git push origin main
```

## 📝 File Locations

| File/Folder | Purpose |
|-------------|---------|
| `index.html` | Home page |
| `about.html` | About page |
| `services.html` | Services page |
| `blog.html` | Blog index (all posts) |
| `blog-post-1.html` to `blog-post-12.html` | Individual blog posts |
| `consultation.html` | Consultation form |
| `contact.html` | Contact page |
| `css/style.css` | All styling |
| `js/script.js` | All JavaScript |
| `images/` | Images folder |
| `README.md` | Main documentation |
| `BLOG_POST_GUIDE.md` | How to manage blog posts |

## 🎨 CSS Variables (Colors)

```css
--primary-dark: #0A0A0A        /* Main background */
--accent-blue: #0056D2         /* Primary action */
--accent-light: #00D4FF        /* Highlights */
--text-white: #FFFFFF          /* Main text */
--text-light: #E0E0E0          /* Secondary text */
--text-muted: #999999          /* Tertiary text */
--text-gray: #888888           /* Gray text */
--card-bg: #1A1A1A             /* Card background */
--border-dark: #2A2A2A         /* Borders */
--dark-bg: var(--primary-dark) /* Page background */
```

Change colors in `css/style.css` root section.

## 🌍 Translation Keys (Common)

These keys are shared across all pages:

```javascript
// Navigation
'nav_home': 'Home' / 'الرئيسية'
'nav_about': 'About' / 'عننا'
'nav_services': 'What We Do' / 'ما نفعله'
'nav_blog': 'Blog' / 'المدونة'
'nav_consultation': 'Consultation' / 'استشارة'
'nav_contact': 'Contact' / 'تواصل معنا'

// Blog specific
'blog_post_X_title': 'Title' / 'العنوان'
'blog_post_X_date': 'Date' / 'التاريخ'
'blog_read_time': 'X min read' / 'X دقائق قراءة'
'company_name': 'AdsGeniusLab'

// Buttons
'btn_read_more': 'Read More' / 'اقرأ المزيد'
'btn_submit': 'Submit' / 'إرسال'

// Footer
'footer_company_name': 'AdsGeniusLab'
'footer_home': 'Home' / 'الرئيسية'
'footer_about': 'About Us' / 'عننا'
'footer_services': 'What We Do' / 'ما نفعله'
```

## 💻 Development Commands

```bash
# Clone repository
git clone https://github.com/rooman-dev/AGL-Services.git
cd AGL-Services

# View status
git status

# Add changes
git add .
git add filename.html

# Commit
git commit -m "type(scope): description"
#   type: feat, fix, docs, style, refactor
#   scope: blog, nav, design, etc
#   description: what changed

# Push to main
git push origin main

# View commit history
git log --oneline

# View file differences
git diff filename.html
```

## 🔗 Important Links

```
GitHub Repo:     https://github.com/rooman-dev/AGL-Services
Live Website:    [Your deployment URL]
Formspree:       https://formspree.io/ (contact forms)
Font Awesome:    https://fontawesome.com/ (icons)
Google Fonts:    https://fonts.google.com/
Bootstrap:       https://getbootstrap.com/
```

## 📞 Contact Info

- **Email**: adsgeniuslab@gmail.com
- **Phone**: +92 318 1292628
- **WhatsApp**: https://wa.me/923181292628

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Links not working | Check file names (case-sensitive) and paths |
| Language not switching | Check `data-i18n` attributes and translation keys |
| Animations not showing | Ensure `fade-in-up` class is on element, scroll page |
| Form not submitting | Verify Formspree ID, check network tab (F12) |
| Mobile menu stuck | Clear browser cache, check Bootstrap is loaded |
| Console errors | Check browser console (F12), fix reported issues |

## ✅ Pre-Publish Checklist

Before deploying any changes:

- [ ] **Content**: Proofread all text for typos
- [ ] **Links**: Test all internal and external links
- [ ] **Translations**: Test language toggle, verify both EN and AR
- [ ] **Responsive**: Test on mobile (F12 device toolbar)
- [ ] **Animations**: Scroll and verify animations trigger
- [ ] **Images**: Images load correctly, alt text is descriptive
- [ ] **Forms**: Submit test forms, verify email received
- [ ] **Console**: Open F12 Console, no red errors
- [ ] **Meta Tags**: Update page title and meta description
- [ ] **Commit Message**: Use semantic commit message

## 📊 File Sizes (Current)

| File | Size | Lines |
|------|------|-------|
| css/style.css | ~45 KB | 1,358 |
| js/script.js | ~15 KB | 358+ |
| Each HTML page | ~15-20 KB | 400-500 |
| All blog posts (12x) | ~200 KB | 5,000+ |
| **Total project** | ~400 KB | 10,000+ |

## 🚀 Performance Tips

1. **Images**: Compress before uploading (use TinyPNG)
2. **CSS**: Already minified, avoid adding large styles
3. **JavaScript**: Keep script.js minimal
4. **Fonts**: Currently 3 fonts, avoid adding more
5. **CDN**: Bootstrap and Font Awesome loaded from CDN (fast)
6. **Caching**: Enable browser caching on server
7. **Lazy Loading**: Images use `loading="lazy"`

## 🔐 Security Tips

1. **Formspree**: Keep form IDs private
2. **Email**: Email address is public (intentional)
3. **WhatsApp**: Phone number is public (intentional)
4. **No Sensitive Data**: Don't store passwords or private keys in files
5. **Git**: Keep `.git` folder private (don't commit to public)

## 📚 Related Documentation

- `README.md` - Full project documentation
- `BLOG_POST_GUIDE.md` - Detailed blog post management
- Inline code comments in HTML/CSS/JS files
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/

---

**Last Updated**: November 26, 2025
