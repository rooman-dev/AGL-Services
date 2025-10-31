/* ============================================
   AdsGeniusLab - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar();
  initializeFormValidation();
  initializeSmoothScroll();
  observeAnimations();
});

/* ============================================
   Navbar Mobile Menu Toggle
   ============================================ */
function initializeNavbar() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
}

/* ============================================
   Form Validation
   ============================================ */
function initializeFormValidation() {
  const forms = document.querySelectorAll('.needs-validation');

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
   Intersection Observer for Animations
   ============================================ */
function observeAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe service cards and other elements
  const elements = document.querySelectorAll('.service-card, .contact-card, .about-content');
  elements.forEach(el => observer.observe(el));
}

/* ============================================
   Navbar Background on Scroll
   ============================================ */
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
  }
});

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
   Scroll to Top Button
   ============================================ */
function initializeScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTopBtn');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Call scroll to top initialization
initializeScrollToTop();

/* ============================================
   Export functions for external use
   ============================================ */
window.AdsGeniusLab = {
  openWhatsApp,
  sendEmail,
  animateCounter
};
