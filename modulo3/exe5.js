function buscaBinaria(arr, alvo) {
    let inicio = 0;
    let fim = arr.length - 1;
  
    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
  
      if (arr[meio] === alvo) {
        return meio; 
      } else if (arr[meio] < alvo) {
        inicio = meio + 1; 
      } else {
        fim = meio - 1; 
      }
    }
    return -1; 
  }

  const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
  const valorProcurado = 20;
  const indice = buscaBinaria(array, valorProcurado);
  
  if (indice !== -1) {
    console.log(`O valor ${valorProcurado} foi encontrado no índice ${indice}.`);
  } else {
    console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
  }
  