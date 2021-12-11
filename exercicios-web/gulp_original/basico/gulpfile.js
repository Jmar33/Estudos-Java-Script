const gulp  = require('gulp')
// const {series} = require('gulp')
// Outra forma de importação é apresentada a seguir:
const parallel = gulp.parallel
const series  = gulp.series

const antes1 = cb => {
    console.log('Tarefa de antes1!')
    return cb()

}

const antes2 = cb => {
    console.log('Tarefa de antes2!')
    return cb()

}    

//Recebe uma função cb como parâmetro, que será passado pelo próprio gulp
//Essa função cb tem como objetivo notificar o próprio gulp que nossa task está encerrada
function copiar(cb){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') //Copia todos os arquivos com a extensão .txt que estão dentro da pasta A
        // pipe(imagemPelaMetade()) //Transforma os arquivos de entrada
        // .pipe(imagemEmPetroEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB')) //Move para uma pasta destino
    return cb()
}

const fim = cb => {
    console.log('Tarefa de fim!')
    return cb()

}
//Exportação de módulos
module.exports.default = series(
    parallel(antes1, antes2), //executa as duas task de maneira paralela, mas somente invoca a função 
                            //copiar após o fim da execução das tarefas anteriores 
    copiar,
    fim
)