const { series }  = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    return gulp.src('src/**/*.js')
        .pipe( babel ({
            comments: false,
            presets: ['env']
        })) //não leva em consideração arquivos de comentarios e utiliza a versão do JS em desenvolvimento
        .pipe(uglify()) // retira os espaços em branco
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) //arquivo de destino
        .pipe(gulp.dest('build'))
    // return cb()
}

function fim(cb) { 
    console.log('fim')
    return cb()
}

exports.default = series(
    padrao, 
    fim)