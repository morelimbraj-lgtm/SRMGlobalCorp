import createGlobe from "cobe";

/**
 * Structural, sparse, rhythmic animations for SRM Global
 */
document.addEventListener("DOMContentLoaded", () => {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 0. Mobile Menu Logic
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      const isOpen = body.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      
      // Lock scroll 
      body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        body.style.overflow = '';
      });
    });
  }

  // 1. Scroll-Driven Hero Interaction variables
  const nav = document.querySelector('.nav-main');
  const heroTrack = document.querySelector('.hero-scroll-track');
  const heroSection = document.querySelector('.hero');
  const heroH1 = document.querySelector('.hero h1');
  const heroSubtext = document.querySelector('.hero .hero-subtext');
  const heroButtons = document.querySelector('.hero .btn-group');
  const globeWrap = document.querySelector('.hero-orbit-wrap');

  // 1.0 Hero Text Split Logic (Restored)
  if (heroH1) {
    const text = heroH1.innerText;
    const words = text.split(' ');
    heroH1.innerHTML = words
      .map((word, i) => `<span class="word" style="animation-delay: ${i * 0.1 + 0.4}s">${word}</span>`)
      .join(' ');
  }

  if (heroSection && heroTrack && !isReducedMotion) {
    const updateHeroScroll = () => {
      const scrollY = window.scrollY;
      const trackHeight = heroTrack.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollableRange = trackHeight - windowHeight;
      const progress = Math.min(Math.max(scrollY / scrollableRange, 0), 1);
      
      heroSection.style.setProperty('--hero-scroll', progress.toFixed(3));

      // Reveal navbar only when globe has moved significantly
      if (progress > 0.8) {
        nav.classList.add('is-visible');
      } else {
        nav.classList.remove('is-visible');
      }
    };

    // 1.2 Method Section Timeline Scroll
    const methodTrack = document.getElementById('method');
    const methodSteps = document.querySelector('.method-steps');

    const updateMethodScroll = () => {
      if (!methodTrack || !methodSteps) return;
      const rect = methodTrack.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight * 0.5;
      const scrollDist = rect.height;
      const currentPos = startOffset - rect.top;
      
      const progress = Math.min(Math.max(currentPos / scrollDist, 0), 1);
      methodSteps.style.setProperty('--method-scroll', progress.toFixed(3));

      // Reveal steps one-by-one as the line passes them
      const steps = methodSteps.querySelectorAll('.step-block');
      steps.forEach(step => {
        const stepRect = step.getBoundingClientRect();
        // Trigger reveal when the step top passes the trigger point (center of screen)
        if (stepRect.top < windowHeight * 0.5) {
          step.classList.add('is-active');
        } else {
          step.classList.remove('is-active');
        }
      });
    };

    window.addEventListener('scroll', () => {
      updateHeroScroll();
      updateMethodScroll();
    }, { passive: true });
    
    updateHeroScroll();
    updateMethodScroll();
  }

  // 1.1 Page Load Staged Entrance
  if (isReducedMotion) {
    if(nav) nav.classList.add('is-visible');
    if(heroSection) heroSection.classList.add('is-initialized');
    if(heroH1) { 
        heroH1.querySelectorAll('.word').forEach(w => {
            w.style.opacity = 1;
            w.style.filter = 'none';
            w.style.transform = 'none';
            w.style.animation = 'none';
        });
    }
  } else {
    // Stage 1: Initial state (nav hidden, globe centered but transparent)
    if (globeWrap) globeWrap.style.opacity = '0';
    // Note: nav visibility is now controlled via the .is-visible class in updateHeroScroll

    // Stage 2: Reveal
    setTimeout(() => {
      if(heroSection) heroSection.classList.add('is-initialized');
      if(globeWrap) globeWrap.style.opacity = '1';
    }, 100);
  }

  // 2. Scroll Reveal System
  const revealElements = document.querySelectorAll(".framer-reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        
        const counters = entry.target.querySelectorAll('.count-up');
        if(counters.length > 0 && !isReducedMotion) {
           counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'), 10);
              const duration = 1200;
              const startTime = performance.now();
              const updateCounter = (currentTime) => {
                 const elapsed = currentTime - startTime;
                 const progress = Math.min(elapsed / duration, 1);
                 const easeProgress = 1 - Math.pow(1 - progress, 3);
                 counter.innerText = Math.floor(easeProgress * target);
                 if(progress < 1) {
                    requestAnimationFrame(updateCounter);
                 } else {
                    counter.innerText = target;
                 }
              };
              requestAnimationFrame(updateCounter);
           });
        } else if (counters.length > 0 && isReducedMotion) {
            counters.forEach(counter => {
                counter.innerText = counter.getAttribute('data-target');
            });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((el) => revealObserver.observe(el));

  // ─── 3. Cobe Globe ───────────────────────────────────────────────
  // Exactly mirrors the React component's animation pattern:
  //   - createGlobe() with NO onRender callback
  //   - Manual requestAnimationFrame loop calling globe.update()
  // ──────────────────────────────────────────────────────────────────
  const canvas = document.getElementById("cobe-canvas");
  if (canvas) {
    let globe = null;
    let animationId = null;
    let phi = 0;
    const speed = 0.005;
    const theta = 0.25;

    // Drag state
    let pointerOrigin = null;
    let phiOffset = 0;
    let dragDelta = 0;

    canvas.addEventListener('pointerdown', (e) => {
      pointerOrigin = e.clientX;
      canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (pointerOrigin !== null) {
        dragDelta = (e.clientX - pointerOrigin) / 200;
      }
    });

    window.addEventListener('pointerup', () => {
      if (pointerOrigin !== null) {
        phiOffset += dragDelta;
        dragDelta = 0;
        pointerOrigin = null;
        canvas.style.cursor = 'grab';
      }
    });

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      // Match the React component exactly:
      // pass raw width, let cobe handle DPR scaling internally
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width,
        height: width,
        phi: 0,
        theta: theta,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.1, 0.1, 0.1],
        glowColor: [0.94, 0.93, 0.91],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.03 },
          { location: [35.6762, 139.6503], size: 0.03 },
          { location: [51.5074, -0.1278], size: 0.03 },
          { location: [-33.8688, 151.2093], size: 0.03 },
          { location: [-33.9249, 18.4241], size: 0.03 },
          { location: [25.2048, 55.2708], size: 0.03 },
          { location: [48.8566, 2.3522], size: 0.03 },
          { location: [-23.5505, -46.6333], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.03 },
        ],
        opacity: 0.7,
      });

      // Manual animation loop — same as the React component's animate()
      function animate() {
        if (pointerOrigin === null) {
          phi += speed;
        }

        globe.update({
          phi: phi + phiOffset + dragDelta,
          theta: theta,
        });

        animationId = requestAnimationFrame(animate);
      }

      animate();

      // Fade in
      setTimeout(() => {
        canvas.style.opacity = '1';
      }, 100);
    }

    // Start when canvas has layout
    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }
  }
});
