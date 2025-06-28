// Loader overlay
window.addEventListener("load", function () {
  const overlay = document.getElementById("loadingOverlay");
  overlay.classList.add("hidden");
  setTimeout(() => overlay.style.display = "none", 400);
});

// Scroll watcher bar
window.addEventListener("scroll", function () {
  const watcher = document.querySelector('.scroll-watcher');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (scrollTop / docHeight) : 0;
  watcher.style.transform = `scaleX(${scrolled})`;
});

// Back to top button
const topButton = document.getElementById("topButton");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
});
topButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navigation highlight on scroll
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".wrc-left-nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
