import prompt from "prompt-sync";
import { calculadora } from "./batata0f.js";

let ler= prompt();

console.log('informe o valor dos ingresso');
let valor=Number(ler());

console.log('informe se no filme é nacional');
let nacional= Number(ler());


console.log('informe se o ingresso é meia');
let meia=Number(ler());

console.log('informe se o ingresso é inteira');
let inteira=Number(ler());

let batata = calculadora (valor,nacional,meia,inteira);

console.log(batata + "esse é o resultado"); 