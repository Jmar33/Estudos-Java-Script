const pai = {nome: 'Pedro', corCabelo: 'preto'}

//Outra forma de atribuirmos referência para um objeto 
//é usando o método create
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: 'false', enumerable: true}
})

filha2.nome = 'Carla'
console.log(filha2)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//uma forma de percorrermos por todos os atributos de um objeto, mesmo aqueles que fazem parte do prototipo é usando o 
// método for in

for(key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key): console.log(`Por herança ${key}`)
}