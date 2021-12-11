// O filter é uma função que percorre o array e retorna true or false para cada um dos elementos
// É gerado um novo array apenas com os elementos que retornaram "true" para a condição do filter

const produtos = [{
    nome: 'Notebook', preco: 3999.99, fragil: true},
    {nome: 'Ipod Pro', preco: 2999.90, fragil: true },
    {nome: 'Copo de vidro', preco: 12.99, fragil:true},
    {nome: 'Copo de plastico', preco: 9.99, fragil: false}
]

const isfragil = e => e.fragil
const isCaro = e => e.preco > 2000

const resultado = produtos.filter(isfragil).filter(isCaro)
console.log(resultado)
console.log(produtos)