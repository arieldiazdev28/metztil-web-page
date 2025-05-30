const imagenes = [
  "../img/hero-catalogo-imagen.jpg",
  "../img/hero-imagen2.jpg",
  "../img/hero-imagen3.jpg",
];

let indiceActual = 0;

const contenedorHero = document.querySelector(".contenedor-hero");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let temporizador;

function mostrarImagen(indice) {
  contenedorHero.style.backgroundImage = `url('${imagenes[indice]}')`;
}

function siguienteImagen() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen(indiceActual);
}

function anteriorImagen() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceActual);
}

function reiniciarTemporizador() {
  clearInterval(temporizador);
  temporizador = setInterval(siguienteImagen, 4000);
}

btnAnterior.addEventListener("click", () => {
  anteriorImagen();
  reiniciarTemporizador();
});

btnSiguiente.addEventListener("click", () => {
  siguienteImagen();
  reiniciarTemporizador();
});

// Mostrar la primera imagen al cargar
mostrarImagen(indiceActual);
temporizador = setInterval(siguienteImagen, 4000);
