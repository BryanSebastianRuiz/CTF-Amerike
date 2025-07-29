// validar_flag.js
const flags = {
  "2": "flag{reversa_del_js}",
  "3": "flag{sql_injection_exitosa}",
  "4": "flag{archivo_oculto_en_html}",
  "5": "flag{análisis_de_red}",
  "6": "flag{pcap_complejo_con_trampa}"
};

function validarFlag(numeroReto, flagIngresada) {
  return flags[numeroReto] === flagIngresada;
}

if (typeof module !== 'undefined') {
  module.exports = { validarFlag };
}
