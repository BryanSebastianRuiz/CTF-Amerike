function validarFlag(retoId, flagIngresada) {
  fetch('../api/validate.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reto: retoId, flag: flagIngresada })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("respuesta").innerText = data.mensaje;
  });
}
