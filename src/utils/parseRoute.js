
export const parseRoute = (path) => {

  const routeRegex = /:([a-zA-z]+)/g;
  //a letra "g" indica que será analisado todas as ocorrências identificadas
  //as barras indicam as extremidades doq será identificado
  //os dois pontos indicam onde a detecção iniciará
  //os parênteses indicam um grupo de caracteres
  //os colchetes indicam a especificidade dos caracteres
  //o sinal de adição indica para considerar tudo que vinher após 


  //inverter uma coisa pela outra(***.ReplaceAll)
  //dizendo q o nome do grupo é 'id'
  // "_" significa se for maiusculo ou minusculo
  const params = path.replaceAll(routeRegex, '(?<id>[a-z0-9-_]+)');


  //query= busca
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`);
  console.log(pathRegex);

  return pathRegex;

  
}
