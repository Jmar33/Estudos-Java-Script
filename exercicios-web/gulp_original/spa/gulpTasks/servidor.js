const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8085,
            open: true,
            livereload: true,
        }))
}

function servidor(cb){
    watch('src/**/*.html', () => gulp.task('appHTML')())
    watch('src/**/*.css', () => gulp.task('appCSS')())
    watch('src/**/*.js', () => gulp.task('appJS')())
    watch('src/assets/imgs/*.*', () => gulp.task('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}