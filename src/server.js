import http from 'node:http';//pra dizer q é um modulo nativo do node ('node:http')
import { bodyHeandler } from './middlewares/bodyHandler.js';// precisa colocar a importação do arquivo
import { routeHeandler } from './middlewares/routeHandler.js';

// const server = http.createServer((request, response) => {
//   const { method, url } = request;
//   return response.writeHead().end(`URL : ${url}`);
//   //writeHead passa o status

// });

const port = 3000;

//ta dizendo q é assincrona
const server = http.createServer(async (request, response) => {
  await bodyHeandler(request, response);
  routeHeandler(request,response);
});

server.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);

});

