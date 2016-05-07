var gulp = require('gulp');

// default
gulp.task('default', [
  'copy',
  'html',
  'imgMin',
  'imgMinPng',
  'watch'
]);

