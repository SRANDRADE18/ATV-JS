import prompt from 'prompt-sync';
let ler=prompt();

console.log('numero');
let ny=Number(ler());

console.log('começando');
contar(ny);

function contar(conta) {
    
    let num= 5;
    while ( conta <= num) {
        console.log(num);
        num--;
    }
    
    }