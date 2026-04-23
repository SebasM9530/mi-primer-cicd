function sumar(a, b) {
  return a * b;  // BUG: cambiamos suma por multiplicación
}

function holaMundo() {
  return "Hola ROTO";  // BUG: mensaje incorrecto
}

module.exports = { sumar, holaMundo };
