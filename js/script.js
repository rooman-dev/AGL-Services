/* ============================================
   AdsGeniusLab - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeNavbar();
  } catch (error) {
    console.warn('Navbar initialization error:', error);
  }
  
  try {
    initializeFormValidation();
  } catch (error) {
    console.warn('Form validation initialization error:', error);
  }
  
  try {
    initializeSmoothScroll();
  } catch (error) {
    console.warn('Smooth scroll initialization error:', error);
  }
  
  try {
    observeAnimations();
  } catch (error) {
    console.warn('Animation observer initialization error:', error);
  }
  
  try {
    initializeTypingAnimation();
  } catch (error) {
    console.warn('Typing animation initialization error:', error);
  }
});

/* ============================================
   Navbar Mobile Menu Toggle
   ============================================ */
function initializeNavbar() {
  try {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (!navbarToggler || !navbarCollapse) {
      return;
    }

    // Close mobile menu when a link is clicked (using Bootstrap API)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        try {
          // Only close if menu is open
          if (navbarCollapse.classList.contains('show')) {
            // Use Bootstrap's Collapse API
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
          }
        } catch (error) {
          console.warn('Nav link click error:', error);
        }
      });
    });
  } catch (error) {
    console.warn('Navbar initialization error:', error);
  }
}

/* ============================================
   Form Validation
   ============================================ */
function initializeFormValidation() {
  try {
    const forms = document.querySelectorAll('.needs-validation');

    if (forms.length === 0) {
      // No forms on this page, skip initialization
      return;
    }

    forms.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.checkValidity()) {
          this.classList.add('was-validated');
          return false;
        }

        this.classList.add('was-validated');
        handleFormSubmit(this);
      });
    });

    // Real-time validation feedback
    const inputs = document.querySelectorAll('.form-control, .form-select, textarea');
    inputs.forEach(input => {
      input.addEventListener('change', function() {
        if (this.value.trim() !== '') {
          this.classList.add('is-valid');
          this.classList.remove('is-invalid');
        }
      });

      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
  } catch (error) {
    console.warn('Form validation initialization error:', error);
  }
}

/* ============================================
   Handle Form Submission
   ============================================ */
async function handleFormSubmit(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  
  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showSuccessMessage(form);
      form.reset();
      form.classList.remove('was-validated');
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    showErrorMessage(form);
  } finally {
    // Re-enable button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  }
}

/* ============================================
   Show Success Message
   ============================================ */
function showSuccessMessage(form) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'alert alert-success';
  messageDiv.style.cssText = 'margin-top: 1.5rem; padding: 1.5rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; color: #155724; font-weight: 600;';
  messageDiv.innerHTML = `
    <i class="fas fa-check-circle"></i> 
    <strong>Success!</strong> Your consultation request has been sent. We'll contact you within 24 hours.
  `;
  
  form.insertAdjacentElement('afterend', messageDiv);
  
  // Scroll to message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

/* ============================================
   Show Error Message
   ============================================ */
function showErrorMessage(form) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'alert alert-danger';
  messageDiv.style.cssText = 'margin-top: 1.5rem; padding: 1.5rem; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; color: #721c24; font-weight: 600;';
  messageDiv.innerHTML = `
    <i class="fas fa-exclamation-triangle"></i> 
    <strong>Oops!</strong> Something went wrong. Please try again or contact us directly at <a href="mailto:adsgeniuslab@gmail.com" style="color: #721c24; text-decoration: underline;">adsgeniuslab@gmail.com</a>
  `;
  
  form.insertAdjacentElement('afterend', messageDiv);
  
  // Scroll to message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

function validateField(field) {
  if (field.hasAttribute('required')) {
    if (field.value.trim() === '') {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    } else if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(field.value)) {
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
      } else {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
      }
    } else {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    }
  }
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   Typing Animation for Headings
   ============================================ */
function initializeTypingAnimation() {
  // Animation handled by Intersection Observer - see startTyping()
  // This function is kept for backward compatibility but is now disabled
  // to prevent conflicts with the observer-based animation
}

/* ============================================
   Intersection Observer for Animations
   ============================================ */
function observeAnimations() {
  // Check if IntersectionObserver is supported
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver not supported');
    return;
  }

  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        
        // Trigger typing animation if element has typing-text class
        if (entry.target.classList.contains('typing-trigger')) {
          const typingTexts = entry.target.querySelectorAll('.typing-text');
          typingTexts.forEach((el, index) => {
            // Reset the element first to clear any stale content
            const dataText = el.getAttribute('data-text');
            if (dataText && el.textContent !== '') {
              el.textContent = '';
            }
            setTimeout(() => {
              startTyping(el);
            }, index * 200);
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Only observe elements if they exist on the page
  const serviceCards = document.querySelectorAll('.service-card');
  const contactCards = document.querySelectorAll('.contact-card');
  const aboutContent = document.querySelectorAll('.about-content');
  const typingTriggers = document.querySelectorAll('.typing-trigger');

  serviceCards.forEach(el => observer.observe(el));
  contactCards.forEach(el => observer.observe(el));
  aboutContent.forEach(el => observer.observe(el));
  typingTriggers.forEach(el => observer.observe(el));
}

function startTyping(element) {
  try {
    // Get the text from data-text attribute first, then fall back to current content
    let text = element.getAttribute('data-text');
    
    // If no data-text, don't clear and animate - just keep original text
    if (!text) {
      return;
    }
    
    // Build the full HTML structure first to preserve layout
    element.style.opacity = '1';
    element.style.display = 'block';
    element.style.whiteSpace = 'normal';
    element.style.wordWrap = 'break-word';
    element.style.maxWidth = '100%';
    element.style.borderRight = '3px solid var(--accent-blue)';
    element.style.paddingRight = '5px';
    element.style.visibility = 'visible';
    
    // Create a container for the text that will be gradually revealed
    element.innerHTML = '';
    let charIndex = 0;
    let typingInterval = null;
    
    typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        // Append one character at a time, preserving spaces and structure
        element.textContent = text.substring(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Add blinking cursor effect after typing completes
        let cursorVisible = true;
        const cursorInterval = setInterval(() => {
          cursorVisible = !cursorVisible;
          element.style.borderRight = cursorVisible 
            ? '3px solid var(--accent-blue)' 
            : '3px solid transparent';
        }, 500);
      }
    }, 20);
  } catch (error) {
    console.warn('Typing animation error:', error);
  }
}

/* ============================================
   Navbar Background on Scroll (Throttled)
   ============================================ */
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', function() {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const navbar = document.querySelector('.navbar');
      if (lastScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

/* ============================================
   WhatsApp Integration
   ============================================ */
function openWhatsApp() {
  const phoneNumber = '923181292628'; // Replace with actual WhatsApp number
  const message = 'Hi AdsGeniusLab, I would like to know more about your services.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}

/* ============================================
   Email Utilities
   ============================================ */
function sendEmail(email) {
  window.location.href = `mailto:${email}`;
}

/* ============================================
   Counter Animation (Optional)
   ============================================ */
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

/* ============================================
   Cookie Consent Management
   ============================================ */
function initializeCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');
  const closeBtn = document.getElementById('closeCookie');
  const cookieTypesList = document.getElementById('cookieTypesList');

  if (!cookieConsent) return;

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem('cookieConsent');
  
  if (cookieChoice) {
    // User has already made a choice, hide the popup
    cookieConsent.style.display = 'none';
  } else {
    // Show the popup
    cookieConsent.style.display = 'flex';
  }

  // Update cookie types list with translations
  if (cookieTypesList) {
    const listItems = cookieTypesList.querySelectorAll('li');
    listItems.forEach((item) => {
      const i18nKey = item.getAttribute('data-i18n');
      if (i18nKey && pageTranslations && pageTranslations[currentLanguage]) {
        item.textContent = pageTranslations[currentLanguage][i18nKey] || item.textContent;
      }
    });
  }

  // Accept cookies
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      closeCookiePopup();
      // You can add Google Analytics or other tracking code here
      loadAnalytics();
    });
  }

  // Reject non-essential cookies
  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      closeCookiePopup();
    });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'dismissed');
      closeCookiePopup();
    });
  }
}

function closeCookiePopup() {
  const cookieConsent = document.getElementById('cookieConsent');
  if (cookieConsent) {
    cookieConsent.classList.add('fade-out');
    setTimeout(() => {
      cookieConsent.style.display = 'none';
    }, 300);
  }
}

// Load analytics if cookies are accepted
function loadAnalytics() {
  // Add Google Analytics or other tracking code here
  // Example:
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'YOUR_GA_ID');
}

// Initialize cookie consent on page load
document.addEventListener('DOMContentLoaded', initializeCookieConsent);
window.AdsGeniusLab = {
  openWhatsApp,
  sendEmail,
  animateCounter
};
