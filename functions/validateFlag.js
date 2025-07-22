const functions = require("firebase-functions");

// Simula tu flags.json como objeto
const flags = {
  "reto1": "flag{oculta_en_el_html}",
  "reto2": "flag{reversa_del_js}",
  "reto3": "flag{ingenieria_inversa}",
  "reto4": "flag{los_metadatos_siempre_solucionan}",
  "reto5": "flag{siempre_a_la_vista}",
  "reto6": "flag{analisis_de_red_en_la_empresa}"
};

exports.validateFlag = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send({ mensaje: "Método no permitido" });
    return;
  }

  const { reto, flag } = req.body;

  if (flags[reto] && flags[reto] === flag) {
    res.json({ valido: true, mensaje: "¡Correcto! Flag aceptada." });
  } else {
    res.json({ valido: false, mensaje: "Flag incorrecta. Intenta de nuevo." });
  }
});
