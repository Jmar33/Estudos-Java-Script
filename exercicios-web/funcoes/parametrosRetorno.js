/**
 * Quando uma função não retorna nenhum tipo
 * automaticamente é inferido o retorno como sendo undefined
 */
function area(altura, largura){
    const area = altura * largura
    if( area > 20)
    {
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }

    
}

console.log(area())
console.log(area(2))
console.log(area(2, 2))
console.log(area(5 , 5))
console.log(area(2, 3, 17, 4, 5))
