export function createContactPage() {
  const content = document.createElement("div");
  content.classList.add("tab-content", "contact-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  content.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "We'd love to hear from you! Here's how you can reach us:";
  content.appendChild(p);

  const contactInfo = [
    { method: "Phone", info: "(123) 456-7890" },
    { method: "Email", info: "info@noorycafe.com" },
    { method: "Address", info: "123 Culinary Lane, Foodville, FC 12345" },
  ];

  const ul = document.createElement("ul");
  contactInfo.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.method}:</strong> ${item.info}`;
    ul.appendChild(li);
  });

  content.appendChild(ul);

  return content;
}
