const http = require('http');

function sumar(a, b) {
  return a + b;
}

function holaMundo() {
  return "Hola DevOps";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(holaMundo());
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = { sumar, holaMundo };
