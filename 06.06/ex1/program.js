import prompt from 'prompt-sync';
let ler = prompt();

console.log('Insira 10 número a seguir');

let v = [];

for(let i = 0; i < 5; i++){
    v[i] = Number(ler());
};

console.log('os números digitados foram:');

for(let r = 0; r < v.length; r++){
    console.log(v[r]);
}