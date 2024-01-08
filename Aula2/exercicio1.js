const valorDaCompra = 100;
const numeroDeparcelas =1;

const desconto =(valorDaCompra *10 /100);
const calculo = valorDaCompra - desconto;

//let pagamentoVista = (valorDaCompra*10/100)

if(numeroDeparcelas ===1 ){
    console.log(`O total que voce ira pagar é R$ ${calculo} ,pois a vista tem 10% de desconto.`)

}else{
    console.log(`O total que você ira pagar é R$ ${valorDaCompra}`)
}