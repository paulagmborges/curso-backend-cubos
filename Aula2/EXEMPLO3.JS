const temIngresso = true;
const idade = 18;
const censura = 16;
const estaComOsPais = true;

//tem ingresso E
// tem idade maior ou igual a censura
if(temIngresso===true){
    
    if(idade>=censura || estaComOsPais===true){
        console.log("Pode entrar")
    }else{console.log("Não pode entrar")}
    

}else{console.log("Não pode entrar")}