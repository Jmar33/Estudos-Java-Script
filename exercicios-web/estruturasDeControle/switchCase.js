// O switch case ainda é um pouco limitado em JS
// Se não colocamos o "break" ele segue o comportamento fallthrough
// Ou seja, executa todas as sentenças após a primeira sentença verdadeira

const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 4:
            console.log('Recuperação')
            break
        case 3: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3.2)
imprimirResultado(11)
imprimirResultado(-1)