//Crie uma função que recebe um array como parâmetro
//e retorna apenas os elementos que são pares e possuem 
//índices pares


const receberSomenteParesDeIndicesPares = function(array){
  
    let newArray = []

    for(let i = 0; i < array.length; i++){
       if(array[i] % 2 === 0 && i % 2 === 0){
            newArray = newArray.concat(array[i])
       }
   }

   console.log(newArray)
}

receberSomenteParesDeIndicesPares([1, 2, 3, 4])
receberSomenteParesDeIndicesPares([10, 70, 22, 43])