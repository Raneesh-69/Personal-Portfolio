let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

if (!document.getElementById("scrollProgress")) {
  const scrollProgress = document.createElement("div");
  scrollProgress.id = "scrollProgress";
  document.body.prepend(scrollProgress);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();
}

if (window.AOS) {
  const animatedElements = document.querySelectorAll(
    ".section, .project-card, .cert-card, .pricing-plans .card, .skill, .service, .contact-section",
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

  const projectDetailsTitle = projectDetailsModal.querySelector(
    "#projectDetailsTitle",
  );
  const projectDetailsText = projectDetailsModal.querySelector(
    "#projectDetailsText",
  );

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
        projectCard?.querySelector(".overlay h3")?.textContent?.trim() ||
        "Project Details";
      const overlaySummary =
        projectCard?.querySelector(".overlay p")?.textContent?.trim() ||
        "Project information is available for this project.";

      openProjectDetails(
        button.dataset.projectTitle || overlayTitle,
        button.dataset.projectDetails ||
          `${overlaySummary} This project includes full implementation details, features, workflow, and technical highlights.`,
      );
    });
  });

  projectDetailsModal
    .querySelectorAll("[data-close-project-details]")
    .forEach((closeElement) => {
      closeElement.addEventListener("click", closeProjectDetails);
    });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      projectDetailsModal.classList.contains("is-open")
    ) {
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
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector(".back-to-top");

if (btnBackToTop) {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleBtnBackToTop = () => {
    window.scrollY > 200
      ? btnBackToTop.classList.add("back-to-top_show")
      : btnBackToTop.classList.remove("back-to-top_show");
  };

  btnBackToTop.addEventListener("click", backToTop);
  window.addEventListener("scroll", toggleBtnBackToTop, { passive: true });
}
