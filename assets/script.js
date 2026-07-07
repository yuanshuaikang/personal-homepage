const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");

    try {
      await navigator.clipboard.writeText(value);
      button.classList.add("is-copied");
      button.setAttribute("title", "Copied");
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("title", "Copy email address");
      }, 1400);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  });
});

const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sectionMap = new Map(
  navLinks
    .map((link) => [link, document.querySelector(link.getAttribute("href"))])
    .filter(([, section]) => section)
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => link.classList.remove("is-active"));
      const activeLink = navLinks.find((link) => sectionMap.get(link) === entry.target);
      if (activeLink) {
        activeLink.classList.add("is-active");
      }
    });
  },
  {
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0.01,
  }
);

sectionMap.forEach((section) => observer.observe(section));
