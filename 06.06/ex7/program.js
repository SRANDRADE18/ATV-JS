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

for(let r = 0; r < v.length ; r++){
    console.log(v[r]);
}

console.log('E o dobro dos números são:');

let v2 = []

for (let e = 0; e < v.length; e++){
    v2[e] = v[e] * 2
}

for(let t = 0; t < v.length ; t++){
    console.log(v2[t]);
}


