
export function initFadeUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only once
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}