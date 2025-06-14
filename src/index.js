// Puxei o módulo http do Node.js

const http = require('http');

const users = require('./mocks/users');

// Criei um servidor HTTP  com http.createServer numa função de callback que recebe request e response
// A função de callback é chamada sempre que uma requisição é feita ao servidor

const server = http.createServer((request, response) => {
  // Console log para exibir o método da requisição e a URL do endpoint acessado
  // request.method contém o método HTTP (GET, POST, etc.) e request.url contém a URL solicitada
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  if(request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Dentro do end sempre precisa mandar uma string, então usei a função JSON.stringify que converte arrays e objetos para strings no formato JSON
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  };
});

// O servidor escuta na porta 3000 e exibe uma mensagem no console quando o servidor é iniciado

server.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'));