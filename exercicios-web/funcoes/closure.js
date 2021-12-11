/**
 * Closure é o escopo criado quando uma função é declarada
 * Esse escopo permite que a função acessar e manipular variáveis externas
 * Funções carregam em sua memória o contexto léxico em que foram declaradas
 */

 //Contexto léxico em ação!

 const x = 'Global'

 function fora() {
     const x = 'Local'
     function dentro() {
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao())