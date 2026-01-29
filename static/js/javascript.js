/**
 * YourFavoriteClass - Interactive Behaviors
 */
(() => {
  'use strict';

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }

  // Scroll reveal animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-up class to animatable elements
  const animateSelectors = [
    '.inspiration-card',
    '.pricing-card',
    '.custom-offer',
    '.review-card',
    '.timeline-item',
    '.teacher-card',
    '.motivation-card',
    '.contact-card',
    '.section-header',
  ];

  document.querySelectorAll(animateSelectors.join(',')).forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(i % 3) * 100}ms`;
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
