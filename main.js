/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.classList.contains("responsive")) {
      menuBtn.classList.remove("responsive");
  } else {
      menuBtn.classList.add("responsive");
  }
}

// Close menu on link click (for mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
      document.getElementById("myNavMenu").classList.remove("responsive");
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
  scrollActive();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
      navHeader.classList.add("shadow");
  } else {
      navHeader.classList.remove("shadow");
  }
}

/* ----- SMOOTH SCROLL EFFECT ----- */
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: "smooth"
          });
      }
  });
});

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Full Stack Web Developer."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  distance: "80px",
  duration: 1500,
  reset: true
});

/* -- HOME SECTION -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* -- ABOUT INFO & CONTACT INFO -- */
sr.reveal(".about-info", { origin: "left", delay: 100 });
sr.reveal(".contact-info", { origin: "left", delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
sr.reveal(".skills-box", { origin: "right", delay: 100 });
sr.reveal(".form-control", { origin: "right", delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
      if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              link.classList.add("active-link");
          } else {
              link.classList.remove("active-link");
          }
      }
  });
}

/* ----- DARK MODE TOGGLE ----- */
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Load saved mode from local storage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference to local storage
  if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
  } else {
      localStorage.setItem("darkMode", "disabled");
  }
});
