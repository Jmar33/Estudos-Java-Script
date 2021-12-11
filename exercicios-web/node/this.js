/**
 * A variável "this" dentro de um módulo, mas fora de uma função aponta para "module.exports"
 * Já quando usada dentro de uma função passa a apontar para o scopo global
 * Por isso quando criamos uma variável com o prefixo "this" ela se torna pública, ou seja, visível a outras funções e módulos
 */

 console.log(this === global)
 console.log(this === module.exports)
 console.log(global === exports)

 const func = function(){
        console.log('Dentro da função')
        console.log(this === module.exports)
        console.log(this === global)
        this.perigo = 'Essa varível tem scopo público, ou global!'
 }

 func()