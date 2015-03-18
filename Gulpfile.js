'use strict';

var gulp = require('gulp'),
    del  = require('del'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    autoprefixer = require('autoprefixer-core'),
    postcss = require('gulp-postcss');


gulp.task('clean', function () {
  del(['.tmp', 'public']);
});

gulp.task('sass', function () {
  gulp
    .src('app/styles/main.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer({ browers: ['last 2 version'] }) ]))
    .pipe(gulp.dest('public/css'));
});

gulp.task('jade', function () {
  gulp
    .src('app/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public/'));
});
