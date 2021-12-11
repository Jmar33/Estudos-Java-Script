//Crie uma função que recebe um objeto como parâmetro e retorna um array de arrays, onde cada elemento é um array
//formado por um conjunto chave valor

const objetoParaArray = function(objeto){
    console.log(Object.entries(objeto))
}

objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})