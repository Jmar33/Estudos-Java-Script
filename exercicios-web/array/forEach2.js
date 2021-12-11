Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Jaqueline', 'Beatriz', 'Luiz']

console.log('Os aprovados são:')
aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})
