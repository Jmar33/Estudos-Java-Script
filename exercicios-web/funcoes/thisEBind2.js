/**
 * Uma outra forma de triplar essa variação do "this" em JS é criando uma variável "self" 
 * que uma vez craida no contexto léxico de uma instância, estará sempre atrelada a essa instância
 */

 function Pessoa (){
     this.idade = 0,
    
     self = this

     setInterval(function() { //setInterval é capaz de excutar uma função a cada intervalo de tempo
         self.idade++         //A função que será executada, bem como o intervalo em ms, devem ser passados como parâmetros
         console.log(self.idade)      
     }/*.bind(this)*/, 1000)
 }

 new Pessoa()