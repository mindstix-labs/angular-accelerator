var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var rename = require('gulp-rename');

gulp.task('webpack', function() {
  return gulp.src('')
    .pipe(gulpWebpack( require('./webpack.config.js')('prod'), webpack ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('dev', function() {
  gulp.src('./app-config/dev.js')
    .pipe(rename('config.js'))
    .pipe(gulp.dest('./src/env'));
});

gulp.task('prod', function() {
  gulp.src('./app-config/prod.js')
    .pipe(rename('config.js'))
    .pipe(gulp.dest('./src/env/'));
});