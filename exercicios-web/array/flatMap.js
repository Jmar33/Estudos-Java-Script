/**
 * O método flatMap não existe na API padrão do JS, mas é uma mistura dos métodos concat e map
 * Onde podemos, por exemplo, "achatar" uma matriz transformando-a em um único array
 */

 const escola = [
    { 
        turma: 'M1',
        alunos:[
            {
                nome: 'João',
                nota: 7.9
            },
            {
                nome: 'Carolina',
                nota: 9
            }]  
    },
    {
        turma: 'M2',
        alunos:[
            {
                nome: 'Isabela',
                nota: 10
            },
            {
                nome: 'Gabriel',
                nota: 4.7
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getAluno = turma => turma.alunos.map(getNotaAluno)

const notas = escola.map(getAluno)
console.log(notas)
console.log([].concat( [ 7.9, 9 ], [ 10, 4.7 ]))

//Criando um array apenas com as notas utilizando flatMap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2= escola.flatMap(getAluno)
console.log(notas2)