//Crie uma função que recebe o valor da base e da altura de um triângulo
//e retorne a área do mesmo, que pode ser arredonda caso necessário, em duas
//casas decimais

const areaDoTriangulo = function(base, altura){
    console.log(parseFloat(base * altura / 2).toFixed(2))
}

areaDoTriangulo(10, 15)
areaDoTriangulo(7, 9)
areaDoTriangulo(9.25, 13.1)