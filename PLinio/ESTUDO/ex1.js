import prompt from 'prompt-sync';
import {calcularTotalAcai} from "./ex1f.js";
let ler=prompt();

console.log('informe o preço');
let n1=Number(ler());

console.log('informe o desconto');
let n2=Number(ler());


let x= calcularTotalAcai + (n1,n2);

console.log( 'total é ?' + x);