import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de notas a serem armazenados:');
let quant = Number(ler());

let v = [];

console.log('Agora, informe as notas a serem a armazenados:');

for(let i = 0; i < quant; i++){
    v[i] = Number(ler());
};

console.log('A notas digitadas foram:');
for(let r = 0; r < v.length; r++){
    console.log(v[r]);        
}

let c = v[0];

for(let z = 1; z < v.length; z++){
    if( c < v[z]){
        c = v[z]
    }
}
console.log('A maior nota é :' + c);
