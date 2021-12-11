function soBoaNoticia(nota){
    if(nota > 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function falaSeForVerdade(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

falaSeForVerdade()
falaSeForVerdade(null)
falaSeForVerdade(undefined)
falaSeForVerdade(0)
falaSeForVerdade('')
falaSeForVerdade(NaN)
falaSeForVerdade(false)
falaSeForVerdade(-1)
falaSeForVerdade(' ')
falaSeForVerdade([])
falaSeForVerdade([1, 2, 3])
falaSeForVerdade({})