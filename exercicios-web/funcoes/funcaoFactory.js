/**
 * Funções Factory são funções que sempre retornam 
 * uma nova instância de um objeto 
 */

 function criarPessoa(){
     return {
         nome: 'Ana',
         sobrenome: 'Silva'

     }
 }

 console.log(criarPessoa())