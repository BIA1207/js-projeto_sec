let titulo = document.querySelector('h1');
let titulo2 = document.querySelector('p');

titulo.innerHTML = 'jogo da adivinhação';
titulo2.innerHTML = 'Escolha um número de 1 a 100';
function exibirTextoNaTela(tag,texto){
    let Campo = document.querySelector(tag)
    Campo.innerHTML = texto; 
}
function verificarChute() {
console.log('apertou o botão');
}