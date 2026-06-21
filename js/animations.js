// ======================================================================
// 🎬 HERO TYPING EFFECT - Premium Intro Animation
// ======================================================================
class TypeWriter {
  constructor(elementId, strings, speed = 80, deleteSpeed = 40, delayBetween = 2000) {
    this.element = document.getElementById(elementId);
    this.strings = strings;
    this.speed = speed;
    this.deleteSpeed = deleteSpeed;
    this.delayBetween = delayBetween;
    this.currentIndex = 0;
    this.currentChar = 0;
    this.isDeleting = false;

    if (this.element) {
      this.type();
    }
  }

  type() {
    const fullText = this.strings[this.currentIndex];

    if (this.isDeleting) {
      this.element.textContent = fullText.substring(0, this.currentChar);
      this.currentChar--;

      if (this.currentChar < 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.strings.length;
        setTimeout(() => this.type(), 500);
        return;
      }

      setTimeout(() => this.type(), this.deleteSpeed);
    } else {
      this.element.textContent = fullText.substring(0, this.currentChar + 1);
      this.currentChar++;

      if (this.currentChar > fullText.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.delayBetween);
        return;
      }

      setTimeout(() => this.type(), this.speed);
    }
  }
}

// ======================================================================
// 🌙 DARK MODE - Modern Toggle with Smooth Transition
// ======================================================================

// ======================================================================
// 🖱️ CUSTOM CURSOR - Subtle Glow Effect
// ======================================================================
class CustomCursor {
  constructor() {
    this.cursor = null;
    this.glow = null;
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.isActive = false;
    this.animationFrameId = null;
    this.init();
  }

  init() {
    this.createCursor();
    this.setupListeners();
    this.animate();
  }

  createCursor() {
    // Main cursor
    this.cursor = document.createElement("div");
    this.cursor.className = "custom-cursor";
    this.cursor.innerHTML = '<div class="cursor-dot"></div>';
    document.body.appendChild(this.cursor);

    // Glow effect
    this.glow = document.createElement("div");
    this.glow.className = "cursor-glow";
    document.body.appendChild(this.glow);

    // Hide default cursor
    document.body.style.cursor = "none";
  }

  setupListeners() {
    document.addEventListener("mousemove", (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    document.addEventListener("mouseenter", () => {
      if (this.cursor) this.cursor.style.opacity = "1";
      if (this.glow) this.glow.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      if (this.cursor) this.cursor.style.opacity = "0";
      if (this.glow) this.glow.style.opacity = "0";
    });

    // Interactive elements
    document.addEventListener("mouseover", (e) => {
      if (
        e.target.matches(
          "a, button, .project-card, .cert-card, .skill, .service, .dark-mode-toggle"
        )
      ) {
        this.isActive = true;
        if (this.cursor) this.cursor.classList.add("active");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (
        e.target.matches(
          "a, button, .project-card, .cert-card, .skill, .service, .dark-mode-toggle"
        )
      ) {
        this.isActive = false;
        if (this.cursor) this.cursor.classList.remove("active");
      }
    });
  }

  updateCursor() {
    // Smooth lerp movement
    this.x += (this.targetX - this.x) * 0.3;
    this.y += (this.targetY - this.y) * 0.3;

    if (this.cursor) {
      this.cursor.style.left = `${this.x}px`;
      this.cursor.style.top = `${this.y}px`;
    }
    if (this.glow) {
      this.glow.style.left = `${this.x}px`;
      this.glow.style.top = `${this.y}px`;
    }
  }

  animate() {
    this.updateCursor();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

// ======================================================================
// 📌 STICKY NAVBAR - Enhanced with Blur on Scroll
// ======================================================================
class StickyNavbar {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.lastScroll = 0;
    this.init();
  }

  init() {
    this.navbar?.classList.add("navbar-enhanced");
    window.addEventListener("scroll", () => this.handleScroll(), {
      passive: true,
    });
  }

  handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      this.navbar?.classList.add("scrolled");
    } else {
      this.navbar?.classList.remove("scrolled");
    }

    // Shrink navbar on scroll
    if (currentScroll > this.lastScroll && currentScroll > 300) {
      this.navbar?.classList.add("nav-shrink");
    } else {
      this.navbar?.classList.remove("nav-shrink");
    }

    this.lastScroll = currentScroll;
  }
}

// ======================================================================
// ⚡ SMOOTH SCROLL ENHANCEMENT - Better UX
// ======================================================================
class SmoothScrollEnhance {
  constructor() {
    this.init();
  }

  init() {
    // Enhance scroll behavior
    if (!("scrollBehavior" in document.documentElement.style)) {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Smooth click on anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href !== "#" && document.querySelector(href)) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }
}

// ======================================================================
// 🎯 ACTIVE SECTION HIGHLIGHT - Navbar Updates on Scroll
// ======================================================================
class ActiveSectionHighlight {
  constructor() {
    this.navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.updateActive(), {
      passive: true,
    });
  }

  updateActive() {
    let current = "";

    this.navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section && window.scrollY >= section.offsetTop - 200) {
        current = link.getAttribute("href");
      }
    });

    this.navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  }
}

// ======================================================================
// 🚀 FLOATING IMAGE ANIMATION - Hero Section
// ======================================================================
class FloatingImage {
  constructor(imageSelector = ".img img") {
    this.image = document.querySelector(imageSelector);
    this.init();
  }

  init() {
    if (this.image) {
      this.image.classList.add("floating-animation");
    }
  }
}

// ======================================================================
// ✨ REVEAL ON SCROLL - Refined viewport-triggered animations
// ======================================================================
class RevealOnScroll {
  constructor() {
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.init();
  }

  init() {
    const targets = document.querySelectorAll(
      ".project-card, .cert-card, .service-section, .items, .contact-section, .About-section"
    );

    if (!targets.length) return;

    if (this.prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
          } else {
            entry.target.classList.remove("reveal-in");
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${(index % 8) * 60}ms`);
      observer.observe(el);
    });
  }
}

// ======================================================================
// 🧲 MAGNETIC BUTTONS - Premium pointer interaction
// ======================================================================
class MagneticButtons {
  constructor() {
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.isTouch = window.matchMedia("(hover: none)").matches;
    this.buttons = document.querySelectorAll(".homeBtn, .my-cv, .btn, .button");
    this.init();
  }

  init() {
    if (!this.buttons.length || this.prefersReducedMotion || this.isTouch) return;

    this.buttons.forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);

        button.style.transform = `translate(${offsetX * 0.12}px, ${offsetY * 0.12}px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0, 0)";
      });
    });
  }
}

// ======================================================================
// 🪩 CARD TILT - Subtle depth on portfolio cards
// ======================================================================
class CardTilt {
  constructor() {
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.isTouch = window.matchMedia("(hover: none)").matches;
    this.cards = document.querySelectorAll(".project-card, .cert-card, .service-section, .items");
    this.init();
  }

  init() {
    if (!this.cards.length || this.prefersReducedMotion || this.isTouch) return;

    this.cards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 8;
        const rotateX = (0.5 - y / rect.height) * 8;
        const scale = card.classList.contains("service-section") ? 1.05 : 1.01;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(${scale})`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
      });
    });
  }
}

// ======================================================================
// 🌈 DYNAMIC SECTION GLOW - Ambient gradient follows scroll
// ======================================================================
class SectionAmbientGlow {
  constructor() {
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.init();
  }

  init() {
    if (this.prefersReducedMotion) return;

    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = window.scrollY / docHeight;
      document.body.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }
}

// ======================================================================
// 🎬 INITIALIZE ALL ANIMATIONS ON DOM READY
// ======================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Hero typing effect - roles rotating
  const typingRoles = [
    "AI/ML Enthusiast",
    "Python Developer",
    "Data Scientist",
    "Problem Solver",
    "Tech Innovator",
    "Deep Learning Practitioner",
    "Computer Vision Developer",
    "NLP Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Open Source Contributor",
    "Cloud Computing Enthusiast",
    "DevOps Learner",
    "Automation Engineer",
    "Data Analyst",
    "Tech Explorer",
    "Algorithm Designer",
    "Competitive Programmer",
    "UI/UX Learner",
    "Startup Enthusiast",
    "Innovation Seeker",
  ];

  const roleElement = document.querySelector(".slogun");
  if (roleElement) {
    new TypeWriter("typing-role", typingRoles, 80, 40, 3000);
  }

  // Dark mode disabled

  // Initialize custom cursor
  if (!window.matchMedia("(hover: none)").matches) {
    new CustomCursor();
  }

  // Initialize sticky navbar
  new StickyNavbar();

  // Enhance smooth scrolling
  new SmoothScrollEnhance();

  // Active section highlight
  new ActiveSectionHighlight();

  // Floating image animation
  new FloatingImage(".img img");

  // Scroll reveal animations
  new RevealOnScroll();

  // Magnetic micro-interactions
  new MagneticButtons();

  // Subtle card tilt depth
  new CardTilt();

  // Ambient color motion driven by scroll
  new SectionAmbientGlow();
});
