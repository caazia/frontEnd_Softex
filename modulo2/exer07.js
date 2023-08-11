function calculateAge(yearOfBirth) {
    const currentYear = 2023;
    const age = currentYear - yearOfBirth;
    return age;
}

function getYearOfBirth() {
    while (true) {
        try {
            const year = prompt("Digite seu ano de nascimento (entre 1922 e 2022):");

            if (isNaN(year)) {
                throw new Error("Ano de nascimento deve ser um número.");
            }

            const yearNum = parseInt(year);

            if (yearNum < 1922 || yearNum > 2022) {
                throw new Error("Ano de nascimento fora do intervalo permitido.");
            }

            return yearNum;
        } catch (error) {
            alert(error.message);
        }
    }
}

function main() {
    const fullName = prompt("Digite seu nome completo:");

    try {
        const yearOfBirth = getYearOfBirth();
        const age = calculateAge(yearOfBirth);

        console.log(`Nome: ${fullName}`);
        console.log(`Idade em 2023: ${age} anos`);
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
    }
}

main();