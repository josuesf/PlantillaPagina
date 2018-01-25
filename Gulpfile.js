var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('styles', function(){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('materialize.css'))
        .pipe(gulp.dest('public/css'))
})

gulp.task('default', ['styles'])