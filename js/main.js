// Smooth scroll (linter friendly)
var links = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < links.length; i++) {
  (function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  })(links[i]);
}


// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all .8s ease";
  observer.observe(sec);
});
