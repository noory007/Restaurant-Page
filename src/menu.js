export function createMenuPage() {
  const content = document.createElement("div");
  content.classList.add("tab-content", "menu-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Our Menu";
  content.appendChild(h1);

  const menuItems = [
    {
      category: "Appetizers",
      items: ["Muhammara", "Fried Calamari", "Spinach and Feta Börek"],
    },
    {
      category: "Main Courses",
      items: ["Grilled Lamb Kebab", "Beef Kofta", "Vegetarian Manti"],
    },
    {
      category: "Desserts",
      items: ["Baklava", "Künefe", "Sütlaç"],
    },
  ];

  menuItems.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");

    const h2 = document.createElement("h2");
    h2.textContent = category.category;
    categoryDiv.appendChild(h2);

    const ul = document.createElement("ul");
    category.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    categoryDiv.appendChild(ul);

    content.appendChild(categoryDiv);
  });

  return content;
}
