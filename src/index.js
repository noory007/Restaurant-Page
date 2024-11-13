// src/index.js
import "./styles.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const homeButton = document.querySelector('button[data-tab="home"]');
  const menuButton = document.querySelector('button[data-tab="menu"]');
  const contactButton = document.querySelector('button[data-tab="contact"]');

  function clearContent() {
    content.innerHTML = "";
  }

  function setActiveButton(button) {
    [homeButton, menuButton, contactButton].forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  }

  function loadHomePage() {
    clearContent();
    content.appendChild(createHomePage());
    setActiveButton(homeButton);
  }

  function loadMenuPage() {
    clearContent();
    content.appendChild(createMenuPage());
    setActiveButton(menuButton);
  }

  function loadContactPage() {
    clearContent();
    content.appendChild(createContactPage());
    setActiveButton(contactButton);
  }

  homeButton.addEventListener("click", loadHomePage);
  menuButton.addEventListener("click", loadMenuPage);
  contactButton.addEventListener("click", loadContactPage);

  loadHomePage();
});
