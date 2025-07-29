import { db, ref, set, push, get, child } from "./firebase-config.js";

const FLAG_CORRECTA = "agvb{flag_valida}";

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const respuesta = document.getElementById("respuesta").value.trim();
  const puntos = calcularPuntos(respuesta);

  const participanteRef = ref(db, "participantes/" + nombre);

  set(participanteRef, {
    nombre: nombre,
    respuesta: respuesta,
    puntos: puntos,
    correcta: validarFlag(respuesta)
  }).then(() => {
    alert("Respuesta enviada con éxito.");
  }).catch((error) => {
    alert("Error al registrar respuesta: " + error);
  });
});

function validarFlag(flag) {
  return flag === FLAG_CORRECTA;
}

function calcularPuntos(flag) {
  return validarFlag(flag) ? 10 : 0;
}
