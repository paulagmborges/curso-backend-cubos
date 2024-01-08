const valorDaCompra = 100;
const numeroDeparcelas = 8;

const desconto = (valorDaCompra * 10) / 100;
const calculo = valorDaCompra - desconto;

const i = 1 / 100;
const valorFinal = valorDaCompra * (1 + i) ** numeroDeparcelas;

if (numeroDeparcelas === 1) {
  console.log(
    `O total que voce ira pagar é R$ ${calculo} ,pois a vista tem 10% de desconto.`
  );
} else if (numeroDeparcelas >= 7 && numeroDeparcelas <= 12) {
  console.log(
    `O total que voce ira pagar é R$ ${valorFinal.toFixed(
      2
    )}, pois parcelando de 7 a 12 vezes tem taxa de juros de 1%.`
  );
} else if (numeroDeparcelas >= 2 && numeroDeparcelas < +6) {
  console.log(`O total que você ira pagar é R$ ${valorDaCompra}`);
} else {
  console.log("numero de parcela invalido");
}
