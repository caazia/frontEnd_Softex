function calcularIMC(peso, altura) {
    try {
      if (altura <= 0 || peso <= 0) {
        throw new Error("A altura e o peso não pode ser menor ou igual a zero.");
      }

      return peso / (altura * altura);
    } catch (erro) {
      console.log(erro);
      return "O IMC não pode ser calculado, tente novamente.";
    } finally {
      console.log("Finalizando o programa.");
    }
  }
  
  const peso = prompt("Digite o peso:");
  const altura = prompt("Digite a altura:");
  
  const imc = calcularIMC(peso, altura);
  
  console.log(imc);