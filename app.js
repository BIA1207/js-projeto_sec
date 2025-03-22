exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let tentativas = 3;

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (tentativas === 0) {
        exibirTextoNaTela('h1', 'Você não tem mais tentativas');
    } else {
        tentativas--;
        if (chute === numeroSecreto) {
            exibirTextoNaTela('h1', 'Parebéns, você acertou');
        } else {
            exibirTextoNaTela('h1', 'Você errou');
        }
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1
}

let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto);












