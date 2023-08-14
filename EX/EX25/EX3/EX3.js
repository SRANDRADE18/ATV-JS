import prompt from "prompt-sync";
import { potenciacao } from "./EX3FF.js";
let ler =prompt();

console.log('informe o numero');

let x =Number(ler());

potenciacao(x);