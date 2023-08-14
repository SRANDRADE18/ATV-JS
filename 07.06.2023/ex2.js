import prompt from 'prompt-sync';
let ler=prompt();

let x = [];
let a = 5;

for (let i = 0; i <= a; i++) {
    console.log('informe os nomes ');
    x[i]=ler();
}
console.log('voce digitou?');
for (let item of x) {
    console.log(x);
  }
