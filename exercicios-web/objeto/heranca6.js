function Aula(nome, idVideo){
    this.nome = nome
    this.idVideo = idVideo
}

const aula1 = new Aula('Aula 1 ', 123)
const aula2 = new Aula('Aula 2', 456)

// Vamos simular o comportamento da função "new"
function novo(f, ...params){
    const obj = {} //Primeiro criamos um objeto
    obj.__proto__ = f.prototype //Depois fazemos com o que sua propriedade proto aponte para o prototype da função
    f.apply(obj, params) //Executamos a função passando qual será a instância de "this" e seus parâmetros
    return obj //Retornamos o objeto
}

const aula3 = novo(Aula, 'Aula 1 ', 123)
const aula4 = novo(Aula, 'Aula 2', 456) 

console.log(aula1)
console.log(aula2)
console.log(aula3)
console.log(aula4)