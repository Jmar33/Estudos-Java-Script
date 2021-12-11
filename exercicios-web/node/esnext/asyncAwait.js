//Esse recurso nos permite "tonar" uma função assíncrona muito próxima de uma função síncrona
// A palavra reservada await só pode ser utilizada em uma função marcada como async
//O await faz com que aguardemos até a resolução da promise (reject ou resolve) para que seja executado o próximo passo

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

let obterTurma = async() =>{

    turmaA = await getTurma('A')
    turmaB = await getTurma('B')
    turmaC = await getTurma('C')
    turmas = [].concat(turmaA, turmaB, turmaC)
    return turmas // O retorn é um objeto AsyncFunction
}

obterTurma()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))