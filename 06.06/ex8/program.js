import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de nomes a serem armazenados:');
let quant = Number(ler());

let v = [];

console.log('Insira os nomes a seguir');

for(let i = 0; i < quant; i++){
    v[i] = ler();
};
console.log(v);

let l = '';

console.log('os nomes após o filtro são:');

for(let r = 0; r < v.length ; r++){
    if(v[r].startsWith('l')){
        console.log(v[r]);
    }
}