const palavra = "Alemanha";

let encontrado = false;
for (let letra of palavra) {
  if (letra === "h") 
  console.log("Tem a letra h");
  encontrado = true;
  break;
}

if (encontrado === false) {
  //ou (!encontrado)
  console.log("Não tem h");
}
