import prompt from 'prompt-sync';
let ler=prompt();

console.log('informe a quantidade de nomes a serem armazenados');
let quant = Number(ler());

let v= [];

console.log('insira os nomes a seguir');

for (let i =0; i < quant;i++){
    v[i]= ler();
}
console.log(v);

let l = '';

console.log('os nomes após o filtro são:');

for(let r =0; r < v.length;r++){
    if (v[r].startsWith('1') || v[r].startsWith('h')) {
    console.log(v[r]);
    }
}