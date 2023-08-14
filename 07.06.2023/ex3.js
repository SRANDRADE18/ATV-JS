import prompt from 'prompt-sync';
let ler=prompt();

let x = [];
let a = 5;

for (let i = 0; i <= a; i++) {
    console.log('informe o numero ');
    x[i]=ler();
}

for (let aa = 0; aa <= a; aa++) {
    console.log('informe a posição');
    aa=ler();
}

console.log('voce digitou?');
for (let item of x) {
    console.log(x);
}