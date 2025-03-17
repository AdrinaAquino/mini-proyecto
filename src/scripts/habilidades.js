
const imagenlogos=document.querySelector("#imagenlogo")
const menu = document.querySelector('#menu');
const navBar = document.querySelector('#opciones');


menu.addEventListener("click", function() {
    console.log("hola");
    navBar.classList.toggle("hidden")
})


const habilidadeslogos = [
    {
        image: "./src/imagen/html.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/tailwind.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/css.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/ts.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/javas.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/next.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/hoja.png",
        description: "logo html",

    },
    {
        image: "./src/imagen/jason.png",
        description: "logo html",

    },
]

function ordenar(datos, indexhtml) {
    indexhtml.innerHTML = "";
    for (let i = 0; i < datos.length; i++) {
        const item = datos[i];
        const template = `<div><img src="${item.image}" alt="" class="logosmall"></div>`
        indexhtml.innerHTML += template
    }
}
ordenar(habilidadeslogos, imagenlogos)


