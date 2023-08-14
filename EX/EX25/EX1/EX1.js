import prompt from "prompt-sync";
import { SomarAte} from "./EXFF.js";
let ler =prompt();

console.log('informe o numero');
let x =Number(ler());

SomarAte(x)