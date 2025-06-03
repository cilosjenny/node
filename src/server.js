import http from 'node:http';
//pra dizer q é um modulo nativo do node ('node:http')

const port = 3000;

http.createServer((request, response) => {
  return response.end('Hello worldddd');

}).listen(port, () => {
  console.log('Rodando servidor local');
  
});

