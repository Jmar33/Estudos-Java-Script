const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Retorna um array contendo as chaves do objeto
console.log(Object.values(pessoa)) //Retorna um array contendo os valores de cada chave de um objeto
console.log(Object.entries(pessoa)) //Retorna um array, cujos elementos também são array, mas de duas posicoes, sendo a primeira
                                    //a chave do objeto e a segunda o valor desta chave
Object.entries(pessoa).forEach( e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

//Podemos definir uma propriedade de forma dinâmica ou através do método defineProperty
// Uma vantagem de usarmos o defineProperty é poder setarmos atributos específicos para a propriedade

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '11/02/2019'
})

console.log(Object.keys(pessoa))
pessoa.dataDeNascimento = '20/09/2017'
console.log(pessoa.dataDeNascimento)

const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}
const obj = Object.assign(dest, obj1, obj2) //O método assign concatena ao primeiro objeto passado como parâmetro as
                                            // propriedades dos demais objetos, caso alguma propriedade já exista, essa
                                            // será sobrescrita

console.log(obj)
console.log(dest)
 