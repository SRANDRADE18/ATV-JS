import prompt from 'prompt-sync';
let ler=prompt();

console.log("sou um bote para converter kilos para gramas.")
console.log("informe o valor a ser convertido!")

let valor = Number(ler());

valor *=1000;

console.log ($(valor) + 'esse é o valor');

