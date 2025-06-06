import { routes } from "../routes.js"
import { Database } from "../database.js";

//criando representação da Database
//new Database é um construtor
const database = new Database()

export const routeHeandler = (request, response) => {

  const route = routes.find(route => {
    return route.method === request.method && route.path.test(request.url);
    //ta verificando se o metodo de aquisição é o msm metodo das routes e dps comparando se o metodo de route é igual a url

  });//para percorrer arrays de objetos


  if (route) {

    const routeParams = request.url.match(route.path);

    const { ...params } = routeParams.groups;

    request.params = params;
    //p/ mostrar só o objeto (id:3)
    //...nomedafunção : tras tudo e pode adicionar tbm


    //({ request, response, database }) = para ser mais flexivil com a ordem dos parametros 
    return route.controller({ request, response, database });
  }

  return response.writeHead(400).end('Erro: o servidor não pôde processar a requisição.');
}