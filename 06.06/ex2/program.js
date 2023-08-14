import prompt from 'prompt-sync';
let ler = prompt();

console.log('Insira os 5 nomes a seguir');

let v = [];

for(let i = 0; i < 5; i++){
    v[i] = ler();
};

console.log('os nomes digitados foram:');

for(let r = 0; r < v.length; r++){
    console.log(v[r]);
}