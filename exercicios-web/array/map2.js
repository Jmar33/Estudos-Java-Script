const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const toJSON = JSON.parse
const getPreco = e => e['preco']

const precos = carrinho.map(toJSON).map(getPreco)
console.log(precos)