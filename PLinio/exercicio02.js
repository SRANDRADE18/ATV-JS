import  prompt from 'prompt-sync';
let ler=prompt();

console.log("sou um bote para converter reais em dólares.")
console.log("informe o valor a ser convertido!")

let valor = Number(ler());

valor *=0.19;

console.log(valor);
