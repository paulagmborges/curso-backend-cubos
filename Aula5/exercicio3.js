   const  dadosPessoa={
    
    nome:'João',
    idade:12,
    profissão:'estudante',
    altura:1.4
}
apresentarPessoa(dadosPessoa)

function verificarIdade(idade){
   
    if(idade <=21){
       return "Jovem"
    }else if(idade >=22 && idade<=65){
       return "adulto"
    }else{
       "idoso(a)"
    }
   }
   

function apresentarPessoa(dadosPessoa){
    const faixaEtaria = verificarIdade(dadosPessoa.idade)
    console.log(`Olá ,meu nome é ${dadosPessoa.nome} ,sou um ${faixaEtaria} tenho ${dadosPessoa.idade} anos ,sou ${dadosPessoa.profissão} e tenho ${dadosPessoa.altura} metros.}`)
}