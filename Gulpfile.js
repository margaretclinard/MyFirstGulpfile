'use strict';

var gulp = require('gulp'),
    del  = require('del'),
    sass = require('gulp-sass');

gulp.task('clean', function () {
  del(['.tmp', 'public']);
});

gulp.task('sass', function () {
  gulp
    .src('app/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});
