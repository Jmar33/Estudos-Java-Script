/**
 * Funções em JS levam em consideração o contexto léxico, 
 * ou seja, o cotexto em que foram definidas
 */

 const valor = 'Global'

 function minhaFuncao() {
     console.log(valor)
 }

 function exec(){
     const valor = 'Local'
     minhaFuncao()
 }

 exec()