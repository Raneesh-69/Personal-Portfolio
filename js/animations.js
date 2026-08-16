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
    this.glowX = 0;
    this.glowY = 0;
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

    // CSS hides the native cursor only for fine pointers. Touch devices keep their native behavior.
    document.body.style.cursor = "";
  }

  setupListeners() {
    document.addEventListener("pointermove", (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
      // pointerenter on document is unreliable across browsers; reveal on the first real move.
      if (this.cursor) this.cursor.style.opacity = "1";
      if (this.glow) this.glow.style.opacity = "1";
      this.x ||= e.clientX;
      this.y ||= e.clientY;
      this.glowX ||= e.clientX;
      this.glowY ||= e.clientY;
    });

    document.addEventListener("pointerenter", (e) => {
      this.x = this.glowX = this.targetX = e.clientX;
      this.y = this.glowY = this.targetY = e.clientY;
      if (this.cursor) this.cursor.style.opacity = "1";
      if (this.glow) this.glow.style.opacity = "1";
    });

    const hideCursor = () => {
      this.isActive = false;
      this.cursor?.classList.remove("active");
      this.glow?.classList.remove("active");
      if (this.cursor) this.cursor.style.opacity = "0";
      if (this.glow) this.glow.style.opacity = "0";
    };

    const showCursor = (e) => {
      if (!e) return;
      this.targetX = e.clientX;
      this.targetY = e.clientY;
      this.x = e.clientX;
      this.y = e.clientY;
      this.glowX = e.clientX;
      this.glowY = e.clientY;
      if (this.cursor) this.cursor.style.opacity = "1";
      if (this.glow) this.glow.style.opacity = "1";
    };

    // pointerleave on document is not reliable when the pointer exits the viewport.
    // Use window-level mouseout/pointerout plus blur so the custom cursor never gets
    // stranded on the page after the real cursor leaves the browser window.
    window.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget && !e.toElement) hideCursor();
    });

    window.addEventListener("pointerout", (e) => {
      if (!e.relatedTarget && !e.toElement) hideCursor();
    });

    window.addEventListener("blur", hideCursor);
    window.addEventListener("mouseleave", hideCursor);

    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("pointerenter", showCursor);

    // Interactive elements
    const interactiveSelector =
      "a, button, input, textarea, select, .project-card, .cert-card, .skill, .service, .service-section";

    document.addEventListener("pointerover", (e) => {
      if (!e.target.closest(interactiveSelector)) return;
      this.isActive = true;
      this.cursor?.classList.add("active");
      this.glow?.classList.add("active");
    });

    document.addEventListener("pointerout", (e) => {
      const leavingInteractive = e.target.closest(interactiveSelector);
      const enteringInteractive = e.relatedTarget?.closest?.(interactiveSelector);
      if (!leavingInteractive || leavingInteractive === enteringInteractive) return;
      this.isActive = false;
      this.cursor?.classList.remove("active");
      this.glow?.classList.remove("active");
    });
  }

  updateCursor() {
    // The dot responds quickly; the halo deliberately trails behind it.
    this.x += (this.targetX - this.x) * 0.42;
    this.y += (this.targetY - this.y) * 0.42;
    this.glowX += (this.targetX - this.glowX) * 0.14;
    this.glowY += (this.targetY - this.glowY) * 0.14;

    if (this.cursor) {
      this.cursor.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
    }
    if (this.glow) {
      this.glow.style.transform = `translate3d(${this.glowX}px, ${this.glowY}px, 0)`;
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

    // Keep the navbar permanently accessible. The visual style changes, but it never slides off-screen.
    this.navbar?.classList.remove("nav-shrink");
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
// ROPE ROBOT - A quiet scroll companion that responds to page movement
// ======================================================================
class RopeRobot {
  constructor() {
    this.element = document.querySelector(".rope-robot");
    this.lastScrollY = window.scrollY;
    this.frame = null;
    this.resetTimer = null;
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.init();
  }

  init() {
    if (!this.element || this.prefersReducedMotion) return;

    window.addEventListener(
      "scroll",
      () => {
        if (this.frame) return;
        this.frame = requestAnimationFrame(() => this.update());
      },
      { passive: true }
    );
  }

  update() {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - this.lastScrollY;
    const direction = delta >= 0 ? 1 : -1;
    const travel = Math.min(Math.max(Math.abs(delta) * 0.36, 2), 12);

    this.element.style.setProperty("--robot-shift", `${direction * travel}px`);
    this.element.style.setProperty("--rope-sway", `${direction * 1.4}deg`);
    this.element.classList.add("is-moving", direction > 0 ? "is-pulling" : "is-releasing");

    window.clearTimeout(this.resetTimer);
    this.resetTimer = window.setTimeout(() => {
      this.element.style.setProperty("--robot-shift", "0px");
      this.element.style.setProperty("--rope-sway", "0deg");
      this.element.classList.remove("is-moving", "is-pulling", "is-releasing");
    }, 160);

    this.lastScrollY = currentScrollY;
    this.frame = null;
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
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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

  // Decorative scroll companion
  new RopeRobot();
});
