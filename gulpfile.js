var gulp = require('gulp');
var sass = require('gulp-sass');


var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});

// Translate SASS to CSS
gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'));
});

// Html destination
gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('app/'));
});

// Images compression
gulp.task('img', function() {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('app/img/'));
});

// Images compression
gulp.task('imgservice', function() {
  return gulp.src('src/images/imgservice/*')
    .pipe(gulp.dest('app/img/imgservice/'));
});

// pdf compression
gulp.task('pdf', function() {
  return gulp.src('src/document/*')
    .pipe(gulp.dest('app/pdf/'));
});


// js destination
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('app/js/'));
});

// Default task
gulp.task('default', ['sass', 'html', 'img', 'imgservice', 'pdf', 'scripts'], function() {
  console.log('******** Default task done ********');
});

// Gulp watch
gulp.task('watch', ['sass', 'html', 'img', 'imgservice', 'pdf', 'scripts'], function() {
  console.log('******** Gulp is watching you ********');
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['html']);
});
