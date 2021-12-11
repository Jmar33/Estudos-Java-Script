Array.prototype.filter2 = function(callback){
    let newArray = []
    for(let i = 0; this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [{
    nome: 'Notebook', preco: 3999.99, fragil: true},
    {nome: 'Ipod Pro', preco: 2999.90, fragil: true },
    {nome: 'Copo de vidro', preco: 12.99, fragil:true},
    {nome: 'Copo de plastico', preco: 9.99, fragil: false}
]

const isfragil = produto => produto.preco >= 500
const isCaro = produto => produto.fragil

const resultado = produtos.filter(isfragil).filter2(isCaro)
console.log(resultado)
console.log(produtos)