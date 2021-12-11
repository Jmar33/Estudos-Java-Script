/**
 * Em JS o "this" de uma função pode variar, o que não acontece em uma arrowFunction, por exemplo
 * O this em função JS aponta para o contexto global, ou seja no browser apontamos para o obj "window"e no node JS para o 
 * obj "global"
 * Já nas ArrowFunction o this sempre aponta para o Modulo que a função foi criada, o modulo atual pode ser acessado 
 * através de "module.exports", ou da palavra "this"
 */

 let comparaComThis = function(param){
     console.log(param === this)
 }
 comparaComThis(this) // -> this se refere ao módulo atual e não ao objeto global

 console.log('/*Usando uma função em JS*/')
 comparaComThis(global)

 obj = {}
 comparaComThis = comparaComThis.bind(obj)
 comparaComThis(global)
 comparaComThis(obj)

 comparaArrow = param => console.log(param === this)

 console.log('\n'+ '/*Usando uma ArrowFunction em JS*/')
 comparaArrow(global)
 comparaArrow(module.exports)
 comparaArrow(this)

 comparaArrow = comparaArrow.bind(obj) // Mesmo usando bind não é possível trocar a associação de uma arrowFunction
 comparaArrow(obj)