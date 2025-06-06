import { parseRoute } from "./utils/parseRoute.js";

export const routes = [
  {
    method: 'GET',
    path: '/produtos',
    controller: ({ request, response, database }) => {
      const produtos = database.select('produtos')//p/ armazenar dentro da variavel o resultado da busca


      return response.writeHead(200).end(JSON.stringify(produtos));
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    controller: ({ request, response, database }) => {
      const { id, nome, preco } = request.body // p/ desestruturar e vir

      //insert = inserir
      //nome da tabela e dados
      //passando em forma de objetos p/ função
      database.insert('produtos', { id, nome, preco });

      return response.writeHead(201).end('Produto cadastrado com sucesso.');
      
      //(JSON.stringify(request.body)) = transformando em string p/ o cliente

    }
  },
  {
    method: 'DELETE',
    path: '/produtos/:id',
    controller: ({ request, response }) => {
      return response.writeHead(200).end(`Produto de id ${request.params.id} foi removido com sucesso`);
    }
  }
].map(route => ({
  ...route,
  path: parseRoute(route.path)
}));
//ta percorrendo uma lista e retornando outra lista(de arrays)
//ta colocando chaves pra ele entender onde tem q percorrer
