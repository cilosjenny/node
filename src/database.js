
//class junção de função e objeto
//função -> instância -> herança(oq era dele passou p/ mim) e representação  
export class Database {
  database = {}

  insert(table, data){
    //veirifcando se a tabela ja existe
    if (Array.isArray(this.database[table])) {
      //Array.isArray = verificando se é array p/ poder executar
      //se existir quero inserir o dado q virá p/ cá n,a tabela(inserindo um dado na tabela)
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
      //se ñ existir um array ou uma tabela, vai criar uma com os dados daq
    }
  }

  //criando função q busca e retorne a tabela
  select(table){
   return  this.database[table];
  }
}