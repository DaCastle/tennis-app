'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('./src//**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', gulp.series('scss'));
});