const cuadrado = document.querySelectorAll(".cuadrado");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;

function cuadradoAzar {
  cuadrado.forEach (nombreDeClase => {
    nombreDeClase.classList.remove("topo");
  })
} 