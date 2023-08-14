export function resultado (a){
    let resposta = ''
    if(a == '>=5'){
    resposta = 'Aprovado'
    }

    else if(a == '<=5'){
        resposta = 'reprovado'
    }

    else {
        resposta = 'força'
    }

    return resposta
}