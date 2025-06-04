import { routes } from "../routes.js"

export const routeHeandler = (request, response) => {
  const route = routes.find(route => {
    return route.method === request.method && route.path === request.url;//ta verificando se o metodo de aquisição é o msm metodo das routes e dps comparando se o metodo de route é igual a url

  });//para percorrer arrays de objetos


  if (route) {
    return route.controller(request, response)

  }

  return response.writeHead(400).end('Erro: o servidor não pôde processar a requisição.')
};

