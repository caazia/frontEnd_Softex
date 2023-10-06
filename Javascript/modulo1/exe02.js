let nota1, nota2, nota3, media = 0;

    nota1 = parseFloat(prompt("Qual a sua primeira nota? "));
    nota2 = parseFloat(prompt("Qual a sua segunda nota? "));
    nota3 = parseFloat(prompt("Qual a sua terceira nota? "));

if (nota1 < 0 || nota1 > 10) {
    alert("A primeira nota deve estar entre 0 e 10.");
} else if(nota2 < 0 || nota2 > 10) {
    alert("A segunda nota deve estar entre 0 e 10.");
} else if(nota3 < 0 || nota3 > 10) {
    alert("A terceira nota deve estar entre 0 e 10.");
} else {
    media = (nota1 + nota2 + nota3) / 3;
    console.log("A sua média é: " + media.toFixed(2));
}