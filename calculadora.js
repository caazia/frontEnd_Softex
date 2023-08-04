function calculadora() {
    while (true) {
      console.log("Escolha a operação:");
      console.log("1: Soma");
      console.log("2: Subtração");
      console.log("3: Multiplicação");
      console.log("4: Divisão");
      console.log("0: Sair");
  
     let opcao = Number(prompt("Digite o número para a operação correspondente: 1: Soma / 2: Subtração / 3: Multiplicação / 4: Divisão / 5: Sair"));
  
      if (opcao === 0) {
        alert("Saindo da calculadora.");
        break;
      }
  
      if (opcao < 1 || opcao > 4) {
        console.log("Essa opção não existe. Tente novamente.");
        continue;
      }
  
      const primeiroValor = Number(prompt("Digite o primeiro valor:"));
      const segundoValor = Number(prompt("Digite o segundo valor:"));
      let resultado;
  
      switch (opcao) {
        case 1:
          resultado = primeiroValor + segundoValor;
          break;
        case 2:
          resultado = primeiroValor - segundoValor;
          break;
        case 3:
          resultado = primeiroValor * segundoValor;
          break;
        case 4:
          resultado = primeiroValor / segundoValor;
          break;
      }
  
     alert("O resultado da operação é: " + resultado);
    }
  }
  
  calculadora();