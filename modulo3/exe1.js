// Criando as listas
var names = ["Cássia", "Danilo", "Luan", "Tereza", "Amanda", "Artur", "Talita", "Douglas", "Sanzia", "Thiago"];
var age = [25, 32, 19, 27, 30, 22, 28, 24, 21, 29];
var favoriteColors = ["azul", "verde", "amarelo", "vermelho", "roxo", "laranja", "rosa", "preto", "branco", "marrom"];

// Imprimindo as listas originais
console.log("Lista de nomes:", names);
console.log("Lista de idades:", age);
console.log("Lista de cores favoritas:", favoriteColors);

age.splice(2, 1, 23); 
favoriteColors.splice(4, 1, "azul-marinho");
age.splice(1, 1, 25); 

// Imprimindo as listas após as modificações
console.log("\nLista de nomes após modificações:", names);
console.log("Lista de idades após modificações:", age);
console.log("Lista de cores favoritas após modificações:", favoriteColors);
