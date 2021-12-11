/**
 * No NODE, cada arquivo simboliza um módulo, os módulos criam um conceito de encapsulamento, 
 * ou seja, o código ali presente só é visto e executado pelo próprio módulo, uma forma de alterarmos esse
 * comportamento é através da importação e exportação
 * 
 */

// Tanto "this", como exports e module.exports representam o mesmo objeto
console.log(this) //por padrão esse objeto inicia vazio
 this.ola = 'Olá'
 exports.bemVindo = 'Seja Bem Vindo ao NODE!'
 module.exports.ateLogo = 'Até o próximo exemplo'