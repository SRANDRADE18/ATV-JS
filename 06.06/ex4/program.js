import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de números a serem armazenados:');
let quant = Number(ler());

let v = [];

console.log('Agora, informe os números a serem a armazenados:');

for(let i = 0; i < quant; i++){
    v[i] = Number(ler());
};

console.log('os números digitados foram:');

for(let r = v.length - 1; r >= 0 ; r--){
    console.log(v[r]);
}