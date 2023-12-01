/* Objetos materiais

-Pessoa
Atributos: nome, idade, sexo;
Metodos: falar(), andar(), comer();

-Animal
Atributos: cor, tamanho, peso;
Metodos: dormir(), voar(), falar();

Objetos abstratos

-Numero
Atributos: valor, tipo, sinal;
Metodos: somar(), subtrair(), dividir();

-Cor
Atributos: nome, codigo, matriz;
Metodos: misturar(), escurecer(), clarear();

*/

class Animal {
    constructor(cor, tamanho, peso) 
    {
      this.cor = cor;
      this.tamanho = tamanho;
      this.peso = peso;
    }
  
    dormir() 
    {
      console.log("Dormir");
    }
    voar() 
    {
      console.log("Voar");
    }
    falar() 
    {
      console.log("Falar");
    }
  }

class Pessoa {
    constructor(nome, idade, sexo) 
    {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    falar()
    {
        console.log("Olá mundo!");
    }
    andar() 
    {
        console.log("Andar");
    }
    comer()
    {
        console.log("Comer");
    }
}