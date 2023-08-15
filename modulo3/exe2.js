let animalData = [
    ["Sapo", "Anfíbio", 1],
    ["Cachorro", "Mamífero", 8],
    ["Vaca", "Mamífero", 5],
    ["Gato", "Mamífero", 6],
    ["Galinha", "Ave", 2]
  ];
  
  function imprimirAnimais(data) {
    console.log("Nome\t\tEspécie\t\tIdade");
    console.log("----------------------------------");
    
    for (let i = 0; i < data.length; i++) {
      let nome = data[i][0];
      let especie = data[i][1];
      let idade = data[i][2];
      
      console.log(`${nome}\t\t${especie}\t\t${idade}`);
    }
  }
  
imprimirAnimais(animalData);
  