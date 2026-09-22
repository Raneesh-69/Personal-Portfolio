let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

const scrollProgress =
  document.getElementById("scrollProgress") ||
  (() => {
    const el = document.createElement("div");
    el.id = "scrollProgress";
    el.setAttribute("aria-hidden", "true");
    el.style.position = "fixed";
    el.style.top = "78px";
    el.style.left = "0";
    el.style.width = "100vw";
    el.style.height = "3px";
    el.style.borderRadius = "0";
    el.style.transform = "none";
    el.style.transformOrigin = "left center";
    el.style.overflow = "hidden";
    el.style.zIndex = "100000";
    el.style.pointerEvents = "none";
    el.style.background = "rgba(242, 108, 79, 0.12)";
    el.style.boxShadow = "none";
    el.style.opacity = "1";
    el.style.visibility = "visible";
    el.style.setProperty("--progress", "0%");
    document.body.prepend(el);
    return el;
  })();

const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  const clamped = Math.min(100, Math.max(0, progress));
  scrollProgress.style.setProperty("--progress", `${clamped}%`);
  scrollProgress.style.opacity = "1";
  scrollProgress.style.visibility = "visible";
  scrollProgress.style.display = "block";
  scrollProgress.style.zIndex = "100000";
  scrollProgress.style.top = "78px";
  scrollProgress.style.left = "0";
};

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

if (window.AOS) {
  const animatedElements = document.querySelectorAll(
    ".section, .pricing-plans .card, .skill, .service, .contact-section"
  );

  animatedElements.forEach((element, index) => {
    if (!element.hasAttribute("data-aos")) {
      element.setAttribute("data-aos", "fade-up");
      element.setAttribute("data-aos-delay", `${(index % 6) * 80}`);
      element.setAttribute("data-aos-duration", "850");
    }
  });

  AOS.init({
    duration: 850,
    once: false,
    mirror: true,
    easing: "ease-out-cubic",
    offset: 90,
  });
}

const projectCards = document.querySelectorAll(".project-card");

if (projectCards.length > 0) {
  let projectDetailsModal = document.getElementById("projectDetailsModal");

  if (!projectDetailsModal) {
    projectDetailsModal = document.createElement("div");
    projectDetailsModal.id = "projectDetailsModal";
    projectDetailsModal.className = "project-details-modal";
    projectDetailsModal.setAttribute("aria-hidden", "true");
    projectDetailsModal.innerHTML = `
      <div class="project-details-backdrop" data-close-project-details></div>
      <div class="project-details-content" role="dialog" aria-modal="true" aria-labelledby="projectDetailsTitle">
        <button type="button" class="project-details-close" data-close-project-details aria-label="Close details">&times;</button>
        <h3 id="projectDetailsTitle">Project Details</h3>
        <p id="projectDetailsText"></p>
      </div>
    `;
    document.body.appendChild(projectDetailsModal);
  }

  const projectDetailsTitle = projectDetailsModal.querySelector("#projectDetailsTitle");
  const projectDetailsText = projectDetailsModal.querySelector("#projectDetailsText");

  const openProjectDetails = (title, details) => {
    projectDetailsTitle.textContent = title;
    projectDetailsText.textContent = details;
    projectDetailsModal.classList.add("is-open");
    projectDetailsModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    projectDetailsModal.classList.remove("is-open");
    projectDetailsModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".project-details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const projectCard = button.closest(".project-card");
      const overlayTitle =
        projectCard?.querySelector(".overlay h3")?.textContent?.trim() || "Project Details";
      const overlaySummary =
        projectCard?.querySelector(".overlay p")?.textContent?.trim() ||
        "Project information is available for this project.";

      openProjectDetails(
        button.dataset.projectTitle || overlayTitle,
        button.dataset.projectDetails ||
          `${overlaySummary} This project includes full implementation details, features, workflow, and technical highlights.`
      );
    });
  });

  projectDetailsModal.querySelectorAll("[data-close-project-details]").forEach((closeElement) => {
    closeElement.addEventListener("click", closeProjectDetails);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectDetailsModal.classList.contains("is-open")) {
      closeProjectDetails();
    }
  });
}

// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Raneesh</a>
              <p>I'm Raneesh, an AI/ML student with a passion for artificial intelligence and machine learning. Enthusiastic about using data-driven approaches to solve complex problems.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:prjoga9@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                prjoga9@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li><a href="certifications.html">Certifications</a></li>
              </ul>
            </div>
            <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/pitamber-joga-79656a351/" target="_blank"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a><br>
              <a href="https://www.kaggle.com/pitamberraneeshjoga" target="_blank"> <img src="./img/kaggle-icon.png" alt="kaggle"></a><br>
              <a href="https://github.com/Raneesh-69" target="_blank"><img src="./img/GitHub.png" alt="github"></a><br>
              <a href="https://www.instagram.com/raneesh_joga/" target="_blank"><img src="./img/Instagram.png" alt="instagram"></a>
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer); // =====================================
// BACK TO TOP BUTTON - FINAL
// =====================================

window.addEventListener("load", function () {
  const btn = document.querySelector(".back-to-top");

  if (!btn) {
    console.error("❌ Back To Top button not found");
    return;
  }

  // Move button directly under <body>
  // so AOS/section positioning cannot affect it.
  document.body.appendChild(btn);

  console.log("✅ Back To Top initialized");

  function updateBackToTop() {
    if (window.scrollY > 200) {
      btn.classList.add("back-to-top_show");
    } else {
      btn.classList.remove("back-to-top_show");
    }
  }

  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateBackToTop, {
    passive: true,
  });

  updateBackToTop();
});
/* ================================================================
   TECH STACK — ORGANIC FLOWING PATH
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const windowArea = document.querySelector(".tech-curve-window");

  if (!windowArea) return;

  /* --------------------------------------------------------------
     REMOVE OLD CSS PATH
     -------------------------------------------------------------- */

  const oldLine = windowArea.querySelector(".tech-curve-line");

  if (oldLine) {
    oldLine.remove();
  }

  /* --------------------------------------------------------------
     SVG
     -------------------------------------------------------------- */

  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");

  svg.classList.add("tech-flow-svg");

  svg.setAttribute("viewBox", "0 0 1600 110");

  svg.setAttribute("preserveAspectRatio", "none");

  /* --------------------------------------------------------------
     MAIN ORGANIC PATH
     -------------------------------------------------------------- */

  const mainPath = document.createElementNS(svgNS, "path");

  mainPath.classList.add("tech-flow-main");

  mainPath.setAttribute(
    "d",
    `
      M -100 72

      C 70 12,
        170 8,
        300 48

      C 425 88,
        535 103,
        665 48

      C 790 -7,
        905 0,
        1035 53

      C 1165 106,
        1285 105,
        1410 43

      C 1515 -8,
        1620 20,
        1710 68
    `
  );

  svg.appendChild(mainPath);

  /* --------------------------------------------------------------
     SECONDARY FLOWING PATH
     -------------------------------------------------------------- */

  const secondaryPath = document.createElementNS(svgNS, "path");

  secondaryPath.classList.add("tech-flow-secondary");

  secondaryPath.setAttribute(
    "d",
    `
      M -100 38

      C 80 94,
        190 100,
        320 57

      C 450 14,
        570 5,
        700 54

      C 830 103,
        940 108,
        1070 57

      C 1200 6,
        1320 7,
        1440 55

      C 1540 95,
        1630 88,
        1710 42
    `
  );

  svg.appendChild(secondaryPath);

  /* --------------------------------------------------------------
     GLOW
     -------------------------------------------------------------- */

  const glowPath = document.createElementNS(svgNS, "path");

  glowPath.classList.add("tech-flow-glow");

  glowPath.setAttribute("d", mainPath.getAttribute("d"));

  svg.insertBefore(glowPath, mainPath);

  /* --------------------------------------------------------------
     MOVING GLOW
     -------------------------------------------------------------- */

  const movingGlow = document.createElementNS(svgNS, "circle");

  movingGlow.classList.add("tech-flow-light-glow");

  movingGlow.setAttribute("r", "11");

  svg.appendChild(movingGlow);

  /* --------------------------------------------------------------
     MOVING LIGHT
     -------------------------------------------------------------- */

  const movingLight = document.createElementNS(svgNS, "circle");

  movingLight.classList.add("tech-flow-light");

  movingLight.setAttribute("r", "2.7");

  svg.appendChild(movingLight);

  windowArea.appendChild(svg);

  /* --------------------------------------------------------------
     ANIMATION
     -------------------------------------------------------------- */

  let progress = 0;

  let previousTime = performance.now();

  function animatePath(time) {
    const delta = time - previousTime;

    previousTime = time;

    /*
      SPEED

      Smaller = slower
      Larger = faster
    */

    progress += delta * 0.000035;

    if (progress >= 1) {
      progress = 0;
    }

    const pathLength = mainPath.getTotalLength();

    const point = mainPath.getPointAtLength(pathLength * progress);

    movingLight.setAttribute("cx", point.x);

    movingLight.setAttribute("cy", point.y);

    movingGlow.setAttribute("cx", point.x);

    movingGlow.setAttribute("cy", point.y);

    requestAnimationFrame(animatePath);
  }

  requestAnimationFrame(animatePath);
});
