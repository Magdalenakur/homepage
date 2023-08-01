console.log("Cześć!");

let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let specialElement = document.querySelector(".js-button__themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    specialElement.innerText = bodyElement.classList.contains("dark") ? "jasny" : "ciemny";
})
