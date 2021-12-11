//Crie uma função que recebe um ano como parâmetro 
//e retorna se ele é ou não bissexto, sendo o critério
//ser multiplo de 4 e não podendo ser multiplo de 100, a
// menos que seja multiplo de 400

const checarAnoBissexto = function(ano){
    if(ano % 100 === 0 && ano % 4 === 0){
        return ano % 400 === 0  
    }
    return ano % 4 ===0 
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))