//ES8: Object.values Object.entries

const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj)) //Retorna apenas os valores
console.log(Object.entries(obj)) //Retorna uma matriz com as chaves e valores

//Melhorias na notação literal de um objeto

const nome = 'Ana'
const pessoa = {
    nome, //É possível passar variáveis como atributos
    ola(){ //Não precisamos mais usar a palavra reservada function para que um objeto possua um método
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Um novo recurso do JS são as classes, mas que no fundo são funções
class Animal {}
class Cachorro extends Animal{
    latir(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().latir())

