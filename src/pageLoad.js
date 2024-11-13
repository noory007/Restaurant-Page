// src/pageLoad.js
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

function createTabs() {
  const content = document.getElementById("content");
  const buttons = document.querySelectorAll("nav button");

  function switchTab(tabName) {
    content.innerHTML = "";
    let tabContent;
    switch (tabName) {
      case "home":
        tabContent = createHomePage();
        break;
      case "menu":
        tabContent = createMenuPage();
        break;
      case "contact":
        tabContent = createContactPage();
        break;
    }
    content.appendChild(tabContent);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tab);
    });
  });

  switchTab("home");
}

export default createTabs;
