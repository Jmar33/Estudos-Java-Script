function MeuObjeto() { }

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Quando criamos objetos a partir de uma mesma função
//Eles passam a apontar para o mesmo protótipo
//Esse protótipo é o prototype da função construtora
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.nome = 'Renato'
obj1.falar()

obj3 = {}
//É possível trocar o protótipo e um objeto criado literalmente
obj3.__proto__ = MeuObjeto.prototype
console.log(obj1.__proto__ === obj3.__proto__)

//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)