/**
 * Existem várias formas de se crar objetos, como veremos a seguir
 */

 //Notação Literal

 const obj = { }

 console.log(obj)

 console.log(typeof obj, typeof Object)


 //Função Construtora
 const obj2 = new Object
 console.log(obj2)
//No caso da nossa função construtora os argumentos preco e desconto só são vísiveis no próprio escopo da função 
//Já o argumento "nome", por receber a palavra "this" se torna vísivel ao restante do código

 function criarProduto(nome, preco, desconto){
     this.nome = nome
     this.calculaPreco = function() {
        return preco * (1 - desconto) 
     }
 }

 produto1 = new criarProduto('Notebook', 4999.99, 0.15)
 produto2 = new criarProduto('Celular', 2500.00, 0.2)
 console.log(produto1.calculaPreco())
 console.log(produto2.calculaPreco())

 //Função Factory
 // É uma função que nos retorna um objeto

 function criarFuncionario(nome, salarioBase, faltas){
     return {
         nome, 
         salarioBase,
         faltas,
         getSalrio(){
             return (salarioBase / 30) * (30 - faltas)
         }
     }
 }

 f1 = criarFuncionario('André', 12000, 4)
 f2 = criarFuncionario('Ana', 15300, 1)

 console.log(f1.getSalrio())
 console.log(f2.getSalrio())

 //Object create (muito usado em casos de herança)

 const filha = Object.create(null)
 filha.nome = 'Ana'
 console.log(filha)

 // Uma função famosa que transforma um JSON em um objeto
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)