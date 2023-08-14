import prompt from 'prompt-sync';
let ler = prompt();

let x = [];

console.log('coloque o nome do centro de doação');
let dac =ler();

console.log('quantidade a ser doada');
let qtd=Number(ler());

console.log('doações:');
let dao=Number(ler());
for (let i=0; i <= dao; i++) {
    x[i]=Number(ler());
}

for (let ix = x; ix + qtd; ix++) {
    x[ix]=Number(ler());
}
console.log('foram doados para o centro  ' +  dac   +  x);

console.log('o projeto ' + dac + 'recebeu ' + qtd + 'doações, totalizando '+ x + ' $reais');

