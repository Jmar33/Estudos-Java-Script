// Crie uma função que receba 4 números como parâmetros
//número, mínimo, máximo e inclusivo e retorna se o primero número
//está entre o máximo e o mínimo, o último parâmetro define se usaremos 
//a lógica inclusiva ou exclusiva

function estaEntre(num, max, min, inclusivo = false)
{
    if(inclusivo){
        return console.log((num >= min && num <= max))
    }

    return console.log((num > min && num < max))
}

estaEntre(10, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)