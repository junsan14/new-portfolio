
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./blog/wp-content/themes/blog-template/'));
};


exports.default = gulp.series(buildStyles);

