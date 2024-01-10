const produtosConsumidos =[
 
{
    nome: "água",
    preco : 20000,
    unidades : 1
},
{
    nome: "pão",
    preco : 20000,
    unidade : 1
},

{nome:"biscoito",
preco : 40000,
unidades : 1
}
];

const novaIdade = 45;

const cartao ={
    nome:"Rodrigo",
    idade : 44,
    produtosConsumidos
    
}
console.log(cartao.nome)
console.log(cartao.idade)
cartao.idade=45
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nome)
console.log(cartao.produtosConsumidos[produtosConsumidos.length-1].preco)
