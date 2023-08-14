import  prompt from 'prompt-sync';
let ler=prompt();

console.log("sou um bot para formatada com o valor das parcelas de uma compra, a partir do valor total da compra e da quantidade do parcelamento.")
console.log("informe o valor da compra")

let valor = Number(ler());

valor *=5.22;

console.log(valor);