
export const bodyHeandler = async (request, response) => {
  const buffers = [];

  //for...off
  // await diz pra esperar e fazer dps pois é assincrona
  for await (const chunk of request) {
    buffers.push(chunk);//pra inserir no final
  }

  try {
    const data = Buffer.concat(buffers).toString();//tranforma em string e mostra pro cliente
    request.body = JSON.parse(data);

  } catch (error) {
    request.body = null;
  }
  return response.setHeader("content-type", " application/json"); //to enviando no header q é um arquivo.json
}
