const sideBar = document.querySelector(".sidebar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
    sideBar.classList.toggle("hide");
});