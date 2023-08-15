let animalData = [
    ["Leão", "Felino", 5],
    ["Cachorro", "Mamífero", 4],
    ["Girafa", "Mamífero", 8],
    ["Gato", "Felino", 6],
    ["Pinguim", "Ave", 2]
  ];
  
  function imprimirInformacoesAnimais(data) {
    console.log("Nome\t\tEspécie\t\tIdade");
    console.log("----------------------------------");
    
    for (let i = 0; i < data.length; i++) {
      let nome = data[i][0];
      let especie = data[i][1];
      let idade = data[i][2];
      
      console.log(`${nome}\t\t${especie}\t\t${idade}`);
    }
  }
  
imprimirInformacoesAnimais(animalData);
  