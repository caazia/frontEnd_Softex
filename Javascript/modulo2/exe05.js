let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let resultado = document.querySelector("span") 

function somar() {
    resultado.innerHTML = parseInt(num1.value) + parseInt(num2.value)
}

function subtrair() {
    resultado.innerHTML = parseInt(num1.value) - parseInt(num2.value)
}

function multiplicar() {
    resultado.innerHTML = parseInt(num1.value) * parseInt(num2.value)
}

function dividir() {
    resultado.innerHTML = parseInt(num1.value) / parseInt(num2.value)
    resto = parseInt(num1.value) % parseInt(num2.value)
    document.getElementById("paragrafo").innerHTML = ("O resto da divisão é " + resto)
}

