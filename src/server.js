import http from 'node:http';
//pra dizer q é um modulo nativo do node ('node:http')


// const server = http.createServer((request, response) => {
//   const { method, url } = request;
//   return response.writeHead().end(`URL : ${url}`);
//   //writeHead passa o status

// });

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if(method === 'GET' && url === '/produtos'){
    return response.writeHead(200).end('Lista de produtos.');
  }

  if (method ===  'POST'  && url === '/produtos'){
    return response.writeHead(201).end('Proutos criados com sucesso.')
  }

  return response.writeHead(400).end('Erro: o servidor não pôde processar a requisição.')

});  

const port = 3000;

server.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
  
});

