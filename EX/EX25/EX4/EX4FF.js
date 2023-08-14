export function separar(sole) {
  
    let resultado= sole;

    let msg= sole;

    for (let post = 0; post < msg.length; post++) {
        let element =  msg.charAt (post);

        resultado = resultado + element + "-"
        
    }
   
    for (let pos = 0; pos <= msg.length; pos++) {
        let element = msg.charAt(pos);

        resultado = resultado + element + "¨";
    }

    console.log(resultado);
    
}