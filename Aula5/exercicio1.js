const dadosPessoa ={
    nome:'Danielle',
    idade: 28 ,
    profissão:'Engenheira',
    altura:1.52
}
function apresentacao (pessoa){
    console.log(`Olá ,meu nome é ${dadosPessoa.nome} , tenho ${dadosPessoa.idade} anos ,sou ${dadosPessoa.profissão} e tenho ${dadosPessoa.altura} metros.}`)
}
apresentacao(dadosPessoa)