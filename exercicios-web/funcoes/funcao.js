/**
 * No JS função é First-Class Object (Citizens)
 * Higher-order fucntion
 * Isso quer dizer que podemos passar um função como parâmetro,
 * atribuir uma função a uma variável e tornar um função o retorno de outra função
 * Ao invés de um dado
 */

 //Criar função de forma literal
 function func1() { }

 //Armazenar uma função em uma varíavel
 const func2 = function() { }

 //Aramzenar uma fução em um array
 const array = [function (a, b) { return a + b}, func1, func2]
 console.log(array[0](2, 3))

 //Armazenar em um atributo de objeto
 const obj = { }
 obj.falar = function() { return 'Opa!!'}
 console.log(obj.falar())

 //Passar uma função como parâmetro

 function run(fun){
     fun()
 }

 run(function() { console.log('Executando...')})

 //Uma função pode retornar/conter outra função

 function soma( a, b){
     return function (c){
         console.log(a + b+ c)
     }
 }

 soma(2, 3)(4)
 const cincoMais = soma(2, 3)
 cincoMais(4)