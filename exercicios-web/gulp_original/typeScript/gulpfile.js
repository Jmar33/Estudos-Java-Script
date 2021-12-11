const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tconfig.json')

function transformacaoTS(){
    return tsProject.src()
    .pipe(tsProject()) //faz a compilação do projeto em typescript
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)