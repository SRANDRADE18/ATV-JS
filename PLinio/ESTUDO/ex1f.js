export function calcularTotalAcai(qtdPequeno, qtdMedio, qtdGrande, cupomDesconto) {
    const precoPequeno = 13.50;
    const precoMedio = 15.00;
    const precoGrande = 17.50;
    
    let total = (qtdPequeno * precoPequeno) + (qtdMedio * precoMedio) + (qtdGrande * precoGrande);
    
    if (cupomDesconto > 0 && cupomDesconto <= 100) {
      let desconto = (cupomDesconto / 100) * total;
      total -= desconto;
    }
    
    return
  }

