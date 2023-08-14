import prompt from 'prompt-sync';
let ler = prompt();

let x=[];

console.log('informe a quantidade notas dos alunos');
let qtd=Number(ler());

console.log('informe as notas dos alunos');
for (let i = 0; i <= qtd; i++) {
    x[i]=Number(ler());
}

console.log('notas digitadas'+  x );

let xv3 = x[0];

for(let z = 1; z < x.length; z++){
    if( xv3 < x[z]){
        xv3 = x[z]
    }
}
console.log('A maior nota é :' + xv3);

let xv1 = x[0];

for(let z1 = 1; z1 < x.length; z1++){
    if( xv1 <= x[z1]){
        xv1 >= x[z1]
    }
}

console.log('A media é :' + xv1);

for(let z2 = 1; z2 < x.length; z2++){
    if( xv3 > x[z2]){
        xv3 = x[z2]
    }
}
console.log('A menor nota é :' + xv3);




