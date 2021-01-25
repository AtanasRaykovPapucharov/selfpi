const gulp = require('gulp')
const sass = require('gulp-sass')
gulp.task('sass:compile', () => {
    return gulp.src(['public/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public'))
})
gulp.task('sass:watch', () => {
    gulp.watch('public/*.scss', ['sass:compile'])
})