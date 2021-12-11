/**
 * funções callback são funções que são passadas como parâmetros e são executadas após ocorrer determinado evento
 * São muito comuns na WEb, principalmente nas famosas requisições AJAX
 */

 const fabricantes = ['Mercedes', 'Audi', 'BMW']

 function imprimir(nome, indice){
     console.log(`${indice+1}.${nome}`)
 }

 fabricantes.forEach(imprimir)

 fabricantes.forEach(fabricante => console.log(fabricante))