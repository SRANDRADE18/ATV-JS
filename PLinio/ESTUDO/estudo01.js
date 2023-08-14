import {calculadora} from './estudoff01.js';

import prompt from "prompt-sync";
let ler= prompt();

console.log("informe a nota");
let n1= Number(ler());

console.log("informe a nota");
let n2= Number(ler());

console.log("informe a nota");
let n3= Number(ler());


let media = calculadora(n1, n2, n3);

let situacao='';

if ( media >=5){
    situacao='aluno aprovado';
}
 
else if (media >= 3 && media < 5){
    situacao=' aluno reprovado ';
}

else {
    situacao ='reprovado';
}

console.log(situacao)

console.log('esse é o resultado   ' + media );
