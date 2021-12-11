//com promises

const http = require('http')

function getTurma(letra){
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{

            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
    
            res.on('end', () =>{
                try{
                    resolve (JSON.parse(resultado))
                }
                catch(e){
                    reject(e)
                }
            })
        })
        
    })
   
}

// let nomes = []

// getTurma('A').then(alunos =>{
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos =>{
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos =>{
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//Função que recebe um array de funções que retornam promisses, que serão executadas em paralelo e depois
//irá executar os métodos then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e) //uma boa prática é sempre usarmos o catch em promises

// getTurma('D')
//     .catch(e => console.log(e))