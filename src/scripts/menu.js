const menu = document.querySelector('#menu');
const navBar = document.querySelector('#opciones');


menu.addEventListener("click", function () {
    console.log("hola mun");
    navBar.classList.toggle("opciones");
    
})