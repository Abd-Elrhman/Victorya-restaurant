'use strict';
const gulp = require('gulp'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      livereload = require('gulp-livereload'),
      sourcemaps = require('gulp-sourcemaps'),
      minify = require('gulp-minify');

// HTML Tasks 
gulp.task('html',function (){
    return gulp.src('project/*.html')
    /*.pipe(concat('index.html'))*/
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

// CSS Tasks
gulp.task('css',function (){
     return gulp.src(['project/css/**/*.css', 'project/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
});

//JS Tasks
gulp.task('js',function (){
    return gulp.src('project/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
});

// Watch Tasks
gulp.task('watch',function (){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/*.html',['html']);
    gulp.watch(['project/css/**/*.css', 'project/css/**/*.scss'], ['css']);
    gulp.watch('project/js/*.js', ['js']);
});