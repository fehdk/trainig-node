const http = require("http");
const hostname = "192.168.11.117"; // Se define el hostname a utilizar, en este caso es la dirección IP 127.0.0.1, que corresponde a la dirección de loopback o localhost.

const port = 8000; // Se define el puerto en el que se va a escuchar las solicitudes, en este caso es el puerto 8000.

const server = http.createServer((req, res) => {
  // Se crea un servidor HTTP utilizando el método createServer del módulo http de Node.js. La función que se pasa como argumento se ejecuta cada vez que se recibe una solicitud HTTP.

  res.statusCode = 200; // Se establece el código de estado de la respuesta en 200, lo que indica que la solicitud se ha procesado correctamente.

  res.setHeader("Content-Type", "text/plain"); // Se establece el tipo de contenido de la respuesta en "text/plain", que indica que se está devolviendo texto sin formato.

  res.end("Hello world from Space!\n"); // Se envía la respuesta al cliente, en este caso se devuelve un mensaje de saludo "Hello world!".
});

server.listen(port, hostname, () => {
  // Se inicia la escucha del servidor en el puerto y hostname especificados, y se define una función callback que se ejecutará cuando el servidor se haya iniciado correctamente.

  console.log(`Server running at http://${hostname}:${port}/`); // Se imprime un mensaje en la consola indicando que el servidor se ha iniciado correctamente y proporcionando la URL para acceder al servidor.
});
