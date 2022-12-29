import './styles.css';
import index from './home';
import menu from './menu'

const content = document.querySelector(".content");
let menuBtn, homeBtn, aboutBtn;
function createHeader () {
    const header = document.createElement("div");
    header.classList.add("header");
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    const nav1 = document.createElement("li");
    nav1.addEventListener("click", createHome);
    nav1.classList.add("homeBtn");
    const nav2 = document.createElement("li");
    nav2.addEventListener("click", createMenu);
    nav2.classList.add("menuBtn");
    const nav3 = document.createElement("li");
    nav3.classList.add("aboutBtn");

    nav1.textContent = "HOME";
    nav2.textContent = "MENU";
    nav3.textContent = "ABOUT";

    nav.appendChild(nav1);
    nav.appendChild(nav2);
    nav.appendChild(nav3);
    header.appendChild(nav);

    content.appendChild(header);
    return;
}

function createFooter () {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footerText = document.createElement("p");
    footerText.classList.add("footerText");
    footerText.textContent = "Made with ❤️ by optobimus";

    footer.appendChild(footerText);
    content.appendChild(footer);
    return;
}


document.addEventListener('DOMContentLoaded', function() {
    createHeader();

    content.appendChild(index());
    
    createFooter();
    homeBtn = document.querySelector(".homeBtn");
    menuBtn = document.querySelector(".menuBtn");
    aboutBtn = document.querySelector(".aboutBtn");


});

function createHome() {
    content.innerHTML = "";
    createHeader();
    homeBtn = document.querySelector(".homeBtn");
    menuBtn = document.querySelector(".menuBtn");
    aboutBtn = document.querySelector(".aboutBtn");
    content.appendChild(index());
    
    createFooter();
}

function createMenu(){
    content.innerHTML = "";
    createHeader();
    homeBtn = document.querySelector(".homeBtn");
    menuBtn = document.querySelector(".menuBtn");
    aboutBtn = document.querySelector(".aboutBtn");
    content.appendChild(menu());
    console.log("Click");

    createFooter();
}