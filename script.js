const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// Get modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const modalLive = document.getElementById("modalLive"); // new live site link
const closeBtn = document.querySelector(".modal .close");

// Open modal on project click
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = project.dataset.title;
    modalDesc.innerHTML = project.dataset.desc;
    modalLink.href = project.dataset.link;
    modalLive.href = project.dataset.live;
    modalLive.style.display = project.dataset.live ? "inline-block" : "none";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if(e.target === modal) modal.style.display = "none";
});

// Contact form reset after submit
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  // optional: show a quick alert
  alert("Your message has been sent!");

  // wait a tiny moment to allow form submission
  setTimeout(() => {
    contactForm.reset(); // clears all input fields
  }, 100);

});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu when a link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Scroll-triggered animations
const scrollElements = document.querySelectorAll(".animate, .animate-left, .animate-right");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (el) => {
  el.classList.add("show");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    }
  });
};

// Run on scroll and on page load
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

