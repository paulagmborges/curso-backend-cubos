const pessoa ={

    nome : "Paula",
    idade : 41,
    temCNH : true,
    apelido :["Paulinha","Cris"],
    altura :1.60
   
};

let textoCNH = "";
if(pessoa.temCNH){
   textoCNH ="possui CNH"
}else{ 
   textoCNH ="não possui CNH"}

   // ternario (melhorando o codigo)
   //let textoCNH = pessoa.temCNH ? "possui CNH : "não possui CNH
   //let variavel= (condição ? valorVerdadeiro : ValorFalso) 

console.log(`${pessoa.nome}, ${pessoa.altura} metros de altura, ${textoCNH} , ${pessoa.idade} anos e tem os seguintes apelidos : 
- ${pessoa.apelido[0]}
- ${pessoa.apelido[1]}.`
)