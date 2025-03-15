const proyectos = document.querySelector("#proyectos")


const imgProyect = [
    {
        titulo: "Robotica",
        descripcion: "Analisis de datos del movimiento",
        imagen: "./src/imagen/brazo.jpg",
    },
    {
        titulo: "Instrumentacion Industrial",
        descripcion: "Analisis de datos de medicion",
        imagen: "./src/imagen/instrumentacion.jpg",
    },
    {
        titulo: "Redes Indutriales",
        descripcion: "Analisis de datos de transmision",
        imagen: "./src/imagen/error.jpg",
    },
    {
        titulo: "BigData",
        descripcion: "Analisis de datos con AI",
        imagen: "./src/imagen/bigdata.jpg",
    },
    {
        titulo: "Datos Mineria",
        descripcion: "Analisis de datos produccion",
        imagen: "./src/imagen/mcc.jpg",
    },
]

function mostrarProyectos() {
    proyectos.innerHTML = ""
    imgProyect.forEach(function (elemento) {
        const template = `<div class="containerpadre">
                <h3>${elemento.titulo}</h3>
                <div class="containerimg">
                    <img src="${elemento.imagen}" alt="${elemento.descripcion}" class="img">
                </div>
                <h4>${elemento.descripcion}</h4>
            </div>`;
        proyectos.innerHTML += template
    })
}
mostrarProyectos()