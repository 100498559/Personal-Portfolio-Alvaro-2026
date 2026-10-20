document.getElementById("year").textContent = new Date().getFullYear();

// Small reveal effect: content remains visible if JavaScript is disabled.
const revealItems = document.querySelectorAll(".project-card, .skill-card, .about-facts > div");
if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("will-reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
