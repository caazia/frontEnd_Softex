function saudacao() {
    console.log("Olá! Essa é uma função tradicional sem parâmetros.");
  }
  
  //com parâmetros e retorno de valor
  function soma(a, b) {
    return a + b;
  }
  
  // Arrow function 
  const subtracao = (a, b) => a - b;
  
  saudacao();
  
  let num1 = 30;
  let num2 = 8;
  
  console.log("A soma de " + num1 + " e " + num2 + " é igual a: "+ soma(num1, num2)); 
  console.log("A subtração de " + num1 + " por " + num2 + " é igual a: " + subtracao(num1, num2)); 
