function verificarIdade(idade){
 if(idade <=21){
    return "Jovem"
 }else if(idade >=22 && idade<=65){
    return "adulto"
 }else{
    "idoso(a)"
 }
}
const valorRetornadoPelaFuncao = verificarIdade(41)
console.log(valorRetornadoPelaFuncao)