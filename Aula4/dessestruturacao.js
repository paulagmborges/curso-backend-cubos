//Desestruturaçãode objetos
// spread ... espalha o conteúdo de um objetos, o conteudo do objeto ,útil quando se quer juntar 2 objetos

const pessoa ={
    nome:"jose",
    idade:33,
    cidade:"Salvador",
    profissao:"Dev"
}


//const nome = pessoa.nome
//const idade = pessoa.idade

const{nome,idade,cidade} = pessoa;
console.log(nome,idade,cidade)