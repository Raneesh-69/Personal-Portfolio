let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

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
              <a href="https://x.com/RaneeshJoga" target="_blank"> <img src="./img/twt2.png" alt="twitter"></a><br>
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
  window.addEventListener("scroll", toggleBtnBackToTop);
}
