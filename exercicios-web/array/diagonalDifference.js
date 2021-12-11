let matriz = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
let diag1 = 0
let diag2 = 0

for(let i = 0; i< 3; i++){

    for(let j = 0; j < 3; j++){
        if(i ===j){
            diag1 += matriz[i][j]
            console.log(diag1)
        }

        if(i + j === 2 ){
            diag2 += matriz[i][j]
            console.log(diag2)
        }
    }

}