export function potenciacao(number) {
  
    let cont=1;
    let vezes=1;
    
    while ( cont <= number) {
        vezes = vezes * cont;
        cont++;    
    }
     
    console.log(" soma " + vezes);
    
    }