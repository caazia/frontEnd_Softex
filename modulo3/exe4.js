class Pessoa {
    constructor(nome, idade, filho = null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
    }
  }
  
  const pessoa1 = new Pessoa("Tereza", 52);
  const pessoa2 = new Pessoa("Danilo", 25);
  const pessoa3 = new Pessoa("Cássia", 30);
  const pessoa4 = new Pessoa("Luna", 2);
  
  pessoa1.filho = pessoa3;
  pessoa2.filho = pessoa4;
  
  const listaEncadeada = [pessoa1, pessoa2];
  
  for (const pessoa of listaEncadeada) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    if (pessoa.filho) {
      console.log(`  Filho: ${pessoa.filho.nome}`);
    } else {
      console.log(` Não tem filhos.`);
    }
    console.log("------------------------");
  }
  