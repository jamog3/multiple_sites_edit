var gulp = require('gulp');
var gulpif  = require('gulp-if');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var cached = require('gulp-cached');

var config  = require('../config');

// html
var ejs = require("gulp-ejs");
var convertEncoding = require('gulp-convert-encoding');

gulp.task('html', ['html_typeA']);

gulp.task('html_typeA', function() {
  var rootPath = config.root + config.src.root;
  var templateType = 'typeA';
  gulp.src([
    config.src.html + '**/*.ejs',
    '!' + config.src.html + '_templates/**/*'
    ])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulpif( !config.isHtmlAllFlag , cached('ejs') ))
    .pipe(ejs({
      'rootPath': rootPath,
      'templateType': templateType
    }, {
      ext: '.html'
    }))
    .pipe(convertEncoding({to: 'EUC-JP'}))
    .pipe(gulp.dest(config.dist_typeA.html));
});

gulp.task('html_typeB', function() {
  var rootPath = config.root + config.src.root;
  var templateType = 'typeB';
  gulp.src([
    config.src.html + '**/*.ejs',
    '!' + config.src.html + '_templates/**/*'
    ])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulpif( !config.isHtmlAllFlag , cached('ejs') ))
    .pipe(ejs({
      'rootPath': rootPath,
      'templateType': templateType
    }, {
      ext: '.html'
    }))
    .pipe(gulp.dest(config.dist_typeB.html));
});
gulp.task('html_typeC', function() {
  var rootPath = config.root + config.src.root;
  var templateType = 'typeC';
  gulp.src([
    config.src.html + '**/*.ejs',
    '!' + config.src.html + '_templates/**/*'
    ])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulpif( !config.isHtmlAllFlag , cached('ejs') ))
    .pipe(ejs({
      'rootPath': rootPath,
      'templateType': templateType
    }, {
      ext: '.html'
    }))
    .pipe(gulp.dest(config.dist_typeC.html));
});
