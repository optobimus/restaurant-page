import './styles.css';

const content = document.querySelector(".content");

const header = document.createElement("div");
header.classList.add("header");
const nav = document.createElement("ul");
nav.classList.add("nav");
const nav1 = document.createElement("li");
const nav2 = document.createElement("li");
const nav3 = document.createElement("li");

nav1.textContent = "HOME";
nav2.textContent = "MENU";
nav3.textContent = "ABOUT";

nav.appendChild(nav1);
nav.appendChild(nav2);
nav.appendChild(nav3);
header.appendChild(nav);


const main = document.createElement("div");
main.classList.add("main");
const welcome = document.createElement("p");
welcome.classList.add("welcome");
const restaurantName = document.createElement("h1");
restaurantName.classList.add("name");
const border = document.createElement("br");
border.classList.add("border");
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
const btn = document.createElement("button");
btn.classList.add("button");

welcome.textContent = "Welcome";
restaurantName.textContent = "Muye";
paragraph.textContent = "The Muye in Brixen is a wonderful Chinese restaurant that serves authentic and delicious dishes. The friendly staff and cozy atmosphere make it a perfect spot for a relaxed dinner with friends or a romantic date.";
btn.textContent = "View our menu";

main.appendChild(welcome);
main.appendChild(restaurantName);
main.appendChild(border);
main.appendChild(paragraph);
main.appendChild(btn);

const footer = document.createElement("div");
footer.classList.add("footer");
const footerText = document.createElement("p");
footerText.classList.add("footerText");
footerText.textContent = "Made with ❤️ by optobimus";

footer.appendChild(footerText);

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);