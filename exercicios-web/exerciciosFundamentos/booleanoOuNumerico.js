//Crie uma função que aceita como parâmetro valores númericos
// ou booleanos, ao receber um número devemos mostrar o seu correspondende 
// negativo, no caso de recebermos um valor booleano, deve retorna o seu oposto
//Por exemplo, o parâmetro 1 retorna -1, já o parâmetro "true", retorna "false"
//Caso sejama passados valores que não são números ou booleanos, devemos retorna:
//"Apenas booleanos e números são aceitos, o parâmetro informado é do tipo X"


const booleanosOuNumericos = function(parametro){
    if(typeof(parametro) === 'boolean'){
        return !parametro
    }
    if(typeof(parametro) === 'number'){
        return -parametro
    }
    return `São aceitos apenas valores númericos e booleanos,
        porém o valor informado é do tipo ${typeof(parametro)}`
}

console.log(booleanosOuNumericos(1))
console.log(booleanosOuNumericos(true))
console.log(booleanosOuNumericos('Joaquim'))
console.log(booleanosOuNumericos(-2000))