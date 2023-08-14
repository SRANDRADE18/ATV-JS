import prompt from 'prompt-sync';
import { batata } from './progrF.js';
let ler=prompt();

console.log('primeiro numero');
let ny=Number(ler());

console.log('segundo numero');
let ny02=Number(ler());

batata(ny,ny02)

console.log(batata);