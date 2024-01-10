const produtosConsumidos =[
 
    {
        nome: "água",
        preco : 20,
        unidades : 1
    },
    {
        nome: "pão",
        preco : 20,
        unidade : 1
    },
    
    {nome:"biscoito",
    preco : 40,
    unidades : 1
    }
    ];
   
    
    const cartao ={
        nome:"Rodrigo",
        idade : 44,
        produtosConsumidos
        
    } 
    let produtos =0;
    let soma = produtosConsumidos[0].preco + produtosConsumidos[1].preco+ produtosConsumidos[2].preco ;
  
    for(let produtos in produtosConsumidos){
     
        console.log(`Sr ${cartao.nome} , você irá pagar $ ${soma} reais`)
   }