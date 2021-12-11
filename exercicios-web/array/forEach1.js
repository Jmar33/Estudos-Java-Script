//O método forEach, por pasdrão no JS recebe como parâmetro uma função callback, esta por sua vez 
//recebe 3 elementos, sendo o primeiro o valor atual, o segundo é o índice e o terceiro é o próprio 
//array

const aprovados = ['Ana', 'Jaqueline', 'Beatriz', 'Luiz']

console.log('Os aprovados são:')
aprovados.forEach(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach( nome => console.log(nome)) //Podemos passar uma função in line

const exibirAprovados = aprovado => console.log(aprovado) //Ou podemos atribuir uma função a uma variável 
                                                         // e passar essa variável como parâmetro
aprovados.forEach(exibirAprovados)