

function cadastrar(event) {

    event.preventDefault();
    const nome = document.querySelector("input[name='nome']").value;
    const salario = document.querySelector("input[name='salario']").value;
    const idade = document.querySelector("input[name='idade']").value;
    const diploma = document.querySelector("input[name='diploma']").checked;

    
    if (nome === "") {
        alert("O nome deve ser preenchido.");
    }
    else if (salario === "") {
        alert("O salario deve ser preenchido.");
    }
    else if (idade === "") {
        alert("O idade deve ser preenchido.");
    }
    else {
        alert("Cadastro enviado!")
    }
    
    const pessoa = {
        nome,
        salario,
        idade,
        diploma
    }
    console.log(pessoa);
}

document.querySelector("input[type='submit']").addEventListener("click", cadastrar);