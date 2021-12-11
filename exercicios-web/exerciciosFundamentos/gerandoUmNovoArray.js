//Crie uma funçao que recebe um array como elemento e 
//retorna o primeiro e o último elemento

const receberPrimeroEUltimoElemento = function(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if( i === 0 || i === (array.length -1)){
            newArray.push(array[i])
        }
    }

    console.log(newArray)

}

receberPrimeroEUltimoElemento([7, 14, 'Olá'])
receberPrimeroEUltimoElemento([-100, 'aplicativo', 16])