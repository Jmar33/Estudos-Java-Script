//Crie uma função que recebe um objeto como parâmetro. 
//Esse objeto contém o nome do aluno e suas respectivas notas
//Deve se retornar o aluno que teve o melhor desempenho

const receberMelhorEstudante = function(objeto){
    let totalNotas = []
    let quantityOfNotas = 0
    let medias = []
    let alunos = []

    quantityOfNotas = Object.values(objeto).map(notas => notas.length)
    totalNotas = Object.values(objeto).map(notas => notas.reduce((total, atual) => (total + atual)))
    alunos = Object.keys(objeto)

    for( let i = 0; i < quantityOfNotas.length; i++){
        medias = medias.concat(totalNotas[i] / quantityOfNotas[i])
    }

    maiorMedia = medias.reduce((nota1, nota2) => nota1 > nota2 ? nota1 : nota2)
    console.log(`O aluno(a) com maior média foi: ${alunos[medias.indexOf(maiorMedia)]} com méida igual a: ${maiorMedia}`)

}

receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})