/**
 * Existem várias formas de se chamar um função, como veremos a seguir
 * A principla diferença entre o apply e o call está na forma que os parâmetros 
 * são passados para a função
 */


 function getPreco(imposto = 0, moeda ='R$'){
     return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
 }

 const produto = {
     nome: 'Notebook',
     preco: 4999.99,
     desconto: 0.1,
     getPreco
 }

 globalThis.preco = 250
 globalThis.desconto = 0.2
 console.log(getPreco())

 console.log(produto.getPreco())

 const carro = { preco: 50000, desconto: 0.15}

 console.log(getPreco.call(carro, 0.1, '$')) //Em call os parâmetros que serão passados são passados no própria chamada de call
 console.log(getPreco.apply(globalThis, [0.17, '€'])) //Já em apply os parâmtros são passados na forma de array
 //Mas em ambos devemos passar o contexto em que a função será executada