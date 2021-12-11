Array.prototype.reduce2 = function(callback, valorInicial){
    let acumulador = valorInicial
    let indiceInicial = 0
    if(valorInicial === undefined){
        acumulador = this[0]
        indiceInicial = 1
    }
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const nums = [1, 2, 3, 4, 5, 6]
const soma = (n1, n2) => n1 + n2
console.log(nums.reduce2(soma))