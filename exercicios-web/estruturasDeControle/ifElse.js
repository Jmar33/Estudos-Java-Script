function imprimirResultado(nota){
    if(nota >=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(6)
imprimirResultado(9)
imprimirResultado('Epa!') //Cuidado, pois como JS é fracamente tipado a sentença não irá gerar
                          //um erro