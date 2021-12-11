/**
 * É possível converter JSON em objetos e vice versa
 * JSON são uma forma de transmitir dados de maneira textual
 * E é independente de qualquer linguagem
 */

 //JSON stringify converte um objeto JS em um JSON
 const obj = {a: 1, b: 2, c:3, soma(){ return a + b + c }}

 console.log(JSON.stringify(obj))
 //Por JSON ser uma forma de transmissão de dados
 //O método soma() não é levado em consideração

 //O JSON parse é uma forma de converter um JSON em objeto JS
// console.log(JSON.parse('{a: 1, b: 2, c: 3}'))
// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// É possível perceber a partir dos exemplos acima que para ser considerado
// um JSON a chave do objeto deve estar entre aspas duplas, assim como as strings
 console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
 //JSON permite receber arrays, objetos e valores booleanos esses podem ser passados de forma literal
 console.log(JSON.parse('{"a": 1.7, "b": "string", "c": [], "d": {}, "e": true}'))