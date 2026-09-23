// Update the footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the menu on small screens.
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the mobile menu after a navigation link is selected.
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});
