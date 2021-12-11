function criarProduto(nome, preco){
   return {
    nome,
    preco,
    desconto: 0.1
   } 
}

console.log(criarProduto('televisao', '1299,99'))