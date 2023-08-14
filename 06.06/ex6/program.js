import prompt from 'prompt-sync';
let ler = prompt();

let v = [];

console.log('Informe o número para fazer a tabuada:');
let n = Number(ler());

for(let i = 0; i < 10; i++){
    v[i] = n * (i + 1) 
};

console.log(`A tabuada de ${n} é:`);

for(let r = 0 ; r < v.length ; r++){
    console.log(v[r]);
}