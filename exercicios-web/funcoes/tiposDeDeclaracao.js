/**
 * Em JS o interpretador carrega todas function declaration
 * antes de executar o nosso código propriamente dito
 */

 console.log(soma(4, 3))
 

 // function declaration
 function soma(x, y)
 {
     return x + y
 }

 // function expression
 const sub = function(x, y){
     return x - y
 }
 console.log(sub(3, 4))

 //named function expression -> essa declaração diferente das anteriores 
 //não é muito utilizada, uma vantagem seria termos o nome da função no stacktrace 
 // durante o debug
 const mult = function mult(x, y){
     return x * y
 }

 console.log(mult(3, 4))