//Objeto são coleções dinâmicas de chaves e valores

//O OBJETO em JS é uma função
const produto = new Object

//No JS podemos criar propriedades de forma de dinâmica

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 89.90

console.log(produto)

delete produto.preco
delete produto['marca do produtos']

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 72
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)

delete carro.proprietario.endereco
//delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)