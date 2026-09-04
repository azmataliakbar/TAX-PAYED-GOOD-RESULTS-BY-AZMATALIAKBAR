/**
 * Every Receipt Matters — From Tax to Progress
 * Interactive JavaScript functionality
 */

(function() {
  'use strict';

  // ===================================
  // DOM Elements
  // ===================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');
  const scenarioButtons = document.querySelectorAll('.scenario-btn');
  const closeButtons = document.querySelectorAll('.close-btn');
  const scenarioContents = document.querySelectorAll('.scenario-content');
  const hamburger = document.querySelector('.hamburger');

  // ===================================
  // Navigation Toggle
  // ===================================
  function initNavigation() {
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }

  // ===================================
  // Scenario Interaction
  // ===================================
  function initScenarios() {
    scenarioButtons.forEach(button => {
      button.addEventListener('click', () => {
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return;

        // Close all other scenarios
        scenarioContents.forEach(c => {
          if (c !== content && !c.hidden) {
            closeScenario(c);
          }
        });

        // Toggle current scenario
        if (content.hidden) {
          openScenario(content, button);
        } else {
          closeScenario(content, button);
        }
      });
    });

    // Close buttons
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.closest('.scenario-content');
        const scenarioCard = button.closest('.scenario-card');
        const btn = scenarioCard?.querySelector('.scenario-btn');
        closeScenario(content, btn);
      });
    });

    // Keyboard support for scenario content
    scenarioContents.forEach(content => {
      content.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const scenarioCard = content.closest('.scenario-card');
          const btn = scenarioCard?.querySelector('.scenario-btn');
          closeScenario(content, btn);
          btn?.focus();
        }
      });
    });
  }

  function openScenario(content, button) {
    if (!content) return;

    // Set initial state for animation
    content.style.opacity = '0';
    content.style.transform = 'translateY(-10px)';
    content.style.transition = 'opacity var(--anim-medium, 0.5s) ease, transform var(--anim-medium, 0.5s) ease';
    content.hidden = false;

    // Force reflow
    content.offsetHeight;

    // Animate in
    requestAnimationFrame(() => {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    });

    if (button) {
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Hide Scenario';
    }
  }

  function closeScenario(content, button) {
    if (!content) return;

    content.style.opacity = '0';
    content.style.transform = 'translateY(-10px)';

    // Wait for animation to complete
    setTimeout(() => {
      content.hidden = true;
      content.style.opacity = '';
      content.style.transform = '';
    }, 500);

    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Explore This Scenario';
    }
  }

  // ===================================
  // Scroll Spy for Active Navigation
  // ===================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navItems.length) return;

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + id) {
              item.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // ===================================
  // Smooth Scroll with Offset
  // ===================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  // ===================================
  // Scroll Animation for Elements
  // ===================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.revenue-card, .resp-card, .path-img-placeholder, .panel, .img-placeholder'
    );

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // CSS for animation class is added dynamically
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      @media (prefers-reduced-motion: reduce) {
        .revenue-card, .resp-card, .path-img-placeholder, .panel, .img-placeholder {
          opacity: 1;
          transform: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ===================================
  // Parallax Effect for Hero Background
  // ===================================
  function initParallax() {
    const hero = document.getElementById('hero');
    const dots = document.querySelectorAll('.floating-dot');

    if (!hero || !dots.length) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.pageYOffset;
      const heroHeight = hero.offsetHeight;

      if (scrollY <= heroHeight) {
        dots.forEach((dot, index) => {
          const speed = 0.2 + (index * 0.05);
          const yPos = scrollY * speed;
          dot.style.transform = `translateY(${yPos}px)`;
        });
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ===================================
  // Dynamic Color Variables for Placeholders
  // ===================================
  function initDynamicColors() {
    // Set CSS custom properties for placeholder colors
    const placeholders = document.querySelectorAll('.img-placeholder, .path-img-placeholder');

    placeholders.forEach(el => {
      const color = el.style.getPropertyValue('--accent') || el.style.getPropertyValue('--pcolor');
      if (color) {
        // Convert hex to rgb for rgba usage
        const hex = color.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        el.style.setProperty('--accent-rgb', `${r},${g},${b}`);
        el.style.setProperty('--pcolor-rgb', `${r},${g},${b}`);
      }
    });
  }

  // ===================================
  // Hero Flow Animation Loop
  // ===================================
  function initHeroFlowAnimation() {
    const flowSteps = document.querySelectorAll('.flow-step');

    if (!flowSteps.length) return;

    let current = 0;

    function highlightStep() {
      flowSteps.forEach((step, index) => {
        const icon = step.querySelector('.flow-icon');
        if (index === current) {
          icon.style.transform = 'scale(1.2)';
          icon.style.filter = 'brightness(1.2)';
        } else {
          icon.style.transform = 'scale(1)';
          icon.style.filter = 'brightness(1)';
        }
      });
      current = (current + 1) % flowSteps.length;
    }

    setInterval(highlightStep, 2000);
  }

  // ===================================
  // Initialize Everything
  // ===================================
  function init() {
    initNavigation();
    initScenarios();
    initScrollSpy();
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initDynamicColors();
    initHeroFlowAnimation();

    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ===================================
  // Public API (for debugging)
  // ===================================
  window.TaxAwareness = {
    openScenario: (index) => {
      const btn = scenarioButtons[index];
      if (btn) btn.click();
    },
    closeAllScenarios: () => {
      scenarioContents.forEach(content => {
        if (!content.hidden) {
          const scenarioCard = content.closest('.scenario-card');
          const btn = scenarioCard?.querySelector('.scenario-btn');
          closeScenario(content, btn);
        }
      });
    }
  };
})();