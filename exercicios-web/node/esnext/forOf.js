//For of é uma estrutura de repetição que iter não sobre índices, mas sim sobre valores
//Pode ser usada em qualquer estrutura, arrays, objetos, strings, set's e map's

for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntoECMA = ['Map', 'Set', 'Promisse']

for(let assunto of assuntoECMA){
    console.log(assunto)
}

const assuntoAbordado = new Map([
    ['Map', {abordado:true}],
    ['Set', {abordado:true}],
    ['Promisse', {abordado: false}]
])


for(let assunto of assuntoAbordado){
    console.log(assunto)
}

for(let assunto of assuntoAbordado.keys()){
    console.log(assunto)
}

for(let assunto of assuntoAbordado.values()){
    console.log(assunto)
}

for(let [ch, vl] of assuntoAbordado.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}