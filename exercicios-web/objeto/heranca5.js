/**
 * JS nos dá a flexibilidade de adicionar novos métodos
 * a tipos como  string e array, além de alterar os seu métodos
 * o que deve ser evitado
 */

 console.log(typeof String)
 console.log(typeof Array)
 console.log(typeof Object)

//No exemplo estamos adicionando o método reverse ao tipo string
//Esse método não está disponível por padrão na API do JS
 String.prototype.reverse = function(){
     return this.split('').reverse().join('')
 }

 console.log('Escola Cod3'.reverse())

 //No exemplo a seguir estamos adicionando o método
 //first que retorna o primeiro elemento de um array

 Array.prototype.first = function(){
     return this[0]
 }

 console.log([1, 2, 3].first())
 console.log(['a', 'b', 'c'].first())

 //Como podemos observar para nos referirmos 
 // a "String" e a "Array" usamos a palavra this


 //O problema de sobreescrevermos funções padrões do JS
 //é que isso pode nos trazer problemas inesperados
 String.prototype.toString = function(){
     return 'Lascou tudo'
 }

 console.log('Escola Cod3'.reverse())