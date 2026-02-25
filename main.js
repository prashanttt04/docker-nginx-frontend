// ====================================
// ELEGANCE BEAUTY PARLOUR - MAIN JS
// ====================================

// ============ NAVIGATION ============
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

// Mobile menu toggle
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.textContent = '☰';
      }
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============ SMOOTH SCROLLING ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============ GALLERY FUNCTIONALITY ============
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Open modal on gallery item click
galleryItems.forEach(item => {
  item.addEventListener('click', function () {
    const img = this.querySelector('img');
    if (img && modal && modalImg) {
      modal.classList.add('active');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  });
});

// Close modal
if (modalClose) {
  modalClose.addEventListener('click', () => {
    closeModal();
  });
}

// Close modal when clicking outside the image
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeModal();
  }
});

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// ============ GALLERY FILTER ============
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    this.classList.add('active');

    // Get filter value
    const filterValue = this.getAttribute('data-filter');

    // Filter gallery items
    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');

      if (filterValue === 'all' || category === filterValue) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.5s ease-in-out';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ============ BOOKING FORM HANDLING ============
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

if (bookingForm) {
  // Set minimum date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  bookingForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Show processing message
    showFormMessage('Processing your booking...', 'info');

    // ===== GOOGLE SHEETS INTEGRATION =====
    // TODO: Replace this URL with your Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoDI6u7ba6JdCSmFjl0QnlqUj_sL-yZi1iizartX55idaX3WJQ9Fu3VOqw-6eVgqYEUQ/exec';

    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Note: With 'no-cors' mode, we can't read the response
      // But if no error is thrown, the request was sent successfully

      // Show success message
      showFormMessage(
        `Thank you, ${formData.name}! Your appointment request has been received. We'll confirm your booking at ${formData.time} on ${formatDate(formData.date)} via email shortly.`,
        'success'
      );

      // Reset form
      bookingForm.reset();

    } catch (error) {
      // Show error message
      console.error('Booking submission error:', error);
      showFormMessage(
        'There was an error submitting your booking. Please try again or call us directly.',
        'error'
      );
    }
  });
}

function showFormMessage(message, type) {
  if (!formMessage) return;

  formMessage.textContent = message;
  formMessage.style.display = 'block';

  // Set colors based on type
  if (type === 'success') {
    formMessage.style.background = '#d4edda';
    formMessage.style.color = '#155724';
    formMessage.style.border = '1px solid #c3e6cb';
  } else if (type === 'error') {
    formMessage.style.background = '#f8d7da';
    formMessage.style.color = '#721c24';
    formMessage.style.border = '1px solid #f5c6cb';
  } else {
    formMessage.style.background = '#d1ecf1';
    formMessage.style.color = '#0c5460';
    formMessage.style.border = '1px solid #bee5eb';
  }

  // Scroll to message
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .testimonial, .service-card, .gallery-item');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

// ============ LAZY LOADING IMAGES ============
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============ UTILITY FUNCTIONS ============

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll to top button (if needed)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ============ INITIALIZATION ============
console.log('✨ Elegance Beauty Parlour website loaded successfully!');

// Prevent flash of unstyled content
document.body.style.visibility = 'visible';
