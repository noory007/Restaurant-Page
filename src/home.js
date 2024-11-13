// src/home.js
export function createHomePage() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Noory's Cafe & Boutique";
  h1.classList.add("main-title");
  content.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent =
    "Experience culinary excellence at Delicious Bites, where every meal is a celebration of flavors!";
  content.appendChild(p1);

  const h2 = document.createElement("h2");
  h2.textContent = "Why Choose Us?";
  content.appendChild(h2);

  const ul = document.createElement("ul");
  const reasons = [
    "Fresh, locally-sourced ingredients",
    "Innovative menu crafted by award-winning chefs",
    "Warm and inviting atmosphere",
    "Impeccable service that makes you feel at home",
  ];
  reasons.forEach((reason) => {
    const li = document.createElement("li");
    li.textContent = reason;
    ul.appendChild(li);
  });
  content.appendChild(ul);

  const p2 = document.createElement("p");
  p2.textContent =
    "Join us for an unforgettable dining experience that will tantalize your taste buds and leave you craving more.";
  content.appendChild(p2);

  return content;
}
