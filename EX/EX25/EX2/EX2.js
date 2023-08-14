import prompt from "prompt-sync";
import { SomarAte } from "./EX2ff.js";
let ler =prompt();

console.log('informe o numero');
let num =Number(ler());

let x = SomarAte(num);
console.log('O FATORIAL É  '+ x  );

