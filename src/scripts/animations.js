// Scroll animations and interactions
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Initialize scroll animations
    this.setupScrollAnimations();
    
    // Setup smooth scrolling for anchor links
    this.setupSmoothScrolling();
    
    // Setup parallax effects
    this.setupParallax();
    
    // Setup intersection observer for better performance
    this.setupIntersectionObserver();
  }

  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation to child elements if they exist
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
        setTimeout(() => { ticking = false; }, 100);
      }
    };

    window.addEventListener('scroll', requestTick);
  }

  setupIntersectionObserver() {
    // Setup counters animation
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            this.animateCounter(entry.target);
            entry.target.classList.add('counted');
          }
        });
      }, { threshold: 0.5 });

      counters.forEach((counter) => {
        counterObserver.observe(counter);
      });
    }

    // Setup progress bars animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (progressBars.length > 0) {
      const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            this.animateProgressBar(entry.target);
            entry.target.classList.add('animated');
          }
        });
      }, { threshold: 0.5 });

      progressBars.forEach((bar) => {
        progressObserver.observe(bar);
      });
    }
  }

  animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = parseInt(element.dataset.duration) || 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  animateProgressBar(element) {
    const target = parseInt(element.dataset.target);
    const duration = parseInt(element.dataset.duration) || 1500;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateProgress = () => {
      current += increment;
      if (current < target) {
        element.style.width = `${current}%`;
        requestAnimationFrame(updateProgress);
      } else {
        element.style.width = `${target}%`;
      }
    };

    updateProgress();
  }
}

// Form validation and submission
class FormHandler {
  constructor() {
    this.init();
  }

  init() {
    this.setupContactForm();
    this.setupNewsletterForm();
    this.setupFormValidation();
  }

  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> Mengirim...';
      submitButton.disabled = true;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          this.showSuccessMessage(contactForm, result.message);
          contactForm.reset();
        } else {
          this.showErrorMessage(contactForm, result.error);
        }
      } catch (error) {
        this.showErrorMessage(contactForm, 'Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
    });
  }

  setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(newsletterForm);
      const email = formData.get('email');
      
      // Show loading state
      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> Subscribe...';
      submitButton.disabled = true;

      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok) {
          this.showSuccessMessage(newsletterForm, result.message);
          newsletterForm.reset();
        } else {
          this.showErrorMessage(newsletterForm, result.error);
        }
      } catch (error) {
        this.showErrorMessage(newsletterForm, 'Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
    });
  }

  setupFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });

        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            this.validateField(input);
          }
        });
      });

      form.addEventListener('submit', (e) => {
        let isValid = true;
        inputs.forEach(input => {
          if (!this.validateField(input)) {
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();
        }
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';

    // Required validation
    if (required && !value) {
      isValid = false;
      errorMessage = 'Field ini wajib diisi';
    }

    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Format email tidak valid';
      }
    }

    // Phone validation
    if (type === 'tel' && value) {
      const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
      if (!phoneRegex.test(value.replace(/[-\s]/g, ''))) {
        isValid = false;
        errorMessage = 'Format nomor telepon tidak valid';
      }
    }

    // Show/hide error message
    this.showFieldError(field, isValid, errorMessage);

    return isValid;
  }

  showFieldError(field, isValid, message) {
    const errorElement = field.parentNode.querySelector('.error-message');
    
    if (!isValid) {
      field.classList.add('border-red-500');
      field.classList.remove('border-gray-300');
      
      if (!errorElement) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
      } else {
        errorElement.textContent = message;
      }
    } else {
      field.classList.remove('border-red-500');
      field.classList.add('border-gray-300');
      
      if (errorElement) {
        errorElement.remove();
      }
    }
  }

  showSuccessMessage(form, message) {
    const existingMessage = form.parentNode.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
    messageDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        ${message}
      </div>
    `;
    
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }

  showErrorMessage(form, message) {
    const existingMessage = form.parentNode.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
    messageDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        ${message}
      </div>
    `;
    
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
  new FormHandler();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause animations
    document.body.classList.add('page-hidden');
  } else {
    // Page is visible, resume animations
    document.body.classList.remove('page-hidden');
  }
});

// Handle resize events with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Handle responsive adjustments
    const isMobile = window.innerWidth < 768;
    document.body.classList.toggle('mobile', isMobile);
  }, 250);
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ScrollAnimations, FormHandler };
}