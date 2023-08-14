export function SomarAte(number) {
    let fat=1;
    for (let cont =  number; cont > 0; cont--) {
        fat = fat * cont; 
    }
    return fat;
 }