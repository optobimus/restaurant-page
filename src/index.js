import './styles.css';
import index from './home';

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

content.appendChild(header);

index();

const footer = document.createElement("div");
footer.classList.add("footer");
const footerText = document.createElement("p");
footerText.classList.add("footerText");
footerText.textContent = "Made with ❤️ by optobimus";

footer.appendChild(footerText);

content.appendChild(footer);
nav1.addEventListener("click", (e) => {
    content.innerHTML = "";
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

    content.appendChild(header);

    index();

    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footerText = document.createElement("p");
    footerText.classList.add("footerText");
    footerText.textContent = "Made with ❤️ by optobimus";

    footer.appendChild(footerText);

    content.appendChild(footer);
});