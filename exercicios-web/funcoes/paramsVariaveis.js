/**
 * Em JS todas as funções possuem um array interno chamado
 * de "arguments", que guarda todos os argumentos que são passados
 * para a função
 */

 // Na versão mais nova do ECMA esse array foi substituído pelo expred

 function soma(){
     let soma = 0
     for(i in arguments){
         soma += arguments[i]
     }
     return soma
 }

 console.log(soma(1))
 console.log(soma())
 console.log(soma(1.1, 2.2, 3.3))
 console.log(soma(1.1, 2.2, 'Teste'))
 console.log(soma('a', 'b', 'c'))