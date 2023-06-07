const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posiciontopo = null;

function cuadradoazar() {
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.classList.remove("topo");
  });

  let posicionalazar = cuadrado[Math.floor(Math.random() * 9)];
  posicionalazar.classList.add("topo");

  posiciontopo = posicionalazar.id;
}
cuadrado.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContext = resultado;
      posicionalazar = null;
    }
  });
});
function movertopo() {
  tiempotopo = setInterval(cuadradoazar, 700);
}
movertopo();

function cuentaregresiva() {
  tiempoactual--;
  tiempofaltante.textContext = tiempoactual;
  if (tiempoactual === 0) {
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert("Se acabó el tiempo, tu puntaje es" + resultado + "topos atrapados");
  }
}

let idtiempo = setInterval(cuentaregresiva, 1000);
