function simulateElection() {
    const candidates = {
        candidato_X: 0,
        candidato_Y: 0,
        candidato_Z: 0,
        branco: 0,
        nulo: 0
    };

    while (true) {
        const vote = prompt("Digite o número correspondente ao candidato (1 para X, 2 para Y, 3 para Z, ou 0 para branco). Ou digite 'fim' para encerrar a votação:");

        if (vote === "fim") {
            break;
        }

        if (isNaN(vote)) {
            alert("Voto inválido. Por favor, digite apenas o número do candidato ou 'fim' para encerrar a votação.");
            continue;
        }

        const voteNum = parseInt(vote);

        if (voteNum === 0) {
            candidates.branco++;
        } else if (voteNum === 1) {
            candidates.candidato_X++;
        } else if (voteNum === 2) {
            candidates.candidato_Y++;
        } else if (voteNum === 3) {
            candidates.candidato_Z++;
        } else {
            candidates.nulo++;
        }
    }

    const candidatesVotesX = candidates.candidato_X;
    const candidatesVotesY = candidates.candidato_Y;
    const candidatesVotesZ = candidates.candidato_Z;
    const whiteVotes = candidates.branco;
    const nullVotes = candidates.nulo;

    const candidatoVencedor = Object.keys(candidates).reduce((a, b) => candidates[a] > candidates[b] ? a : b);

    console.log(`Votos do candidato X: ${candidatesVotesX}`);
    console.log(`Votos do candidato Y: ${candidatesVotesY}`);
    console.log(`Votos do candidato Z: ${candidatesVotesZ}`);
    console.log(`Votos em branco: ${whiteVotes}`);
    console.log(`Votos nulos: ${nullVotes}`);
    console.log(`Candidato vencedor: ${candidatoVencedor}`);
}

simulateElection();