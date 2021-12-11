/**
 * O consceito de herança em JS vem a partir do conceito de protótipo, caso o objeto não possua uma propriedade
 * iremos percorrer a cadeia de heranças, e caso esssa propriedade exista em um dos prototipos ela será exibida, 
 * caso o contrário será retornado "undefined"
 */

const ferrari = {
    modelo: 'F40',
    velocidadeMax: 340,

}

const volvo = {
    modelo: 'V40',
    velocidadeMax: 240
}
console.log(ferrari.prototype) //somente funções possuem a propriedade prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__) //Object.prototype é a última instância não possuindo protótipos

const meuObjeto = function(){
    return { }
}

console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)