Array.prototype.map2 = function(callback){
    
    const array =[]

    for(let i=0; i <this.length; i++){
        array.push(callback(this[i], i, this))
    }

    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const toJSON = JSON.parse
const getPreco = e => e['preco']

const precos = carrinho.map2(toJSON).map(getPreco)
console.log(precos)