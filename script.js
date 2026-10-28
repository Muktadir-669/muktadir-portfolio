const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.querySelectorAll("a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

document.getElementById("year").textContent = new Date().getFullYear();
