var gulp = require('gulp');
var sass = require('gulp-sass');

// Translate SASS to CSS
gulp.task('sass', function(){
  return gulp.src('src/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass   
    .pipe(gulp.dest('src/scss/css'))
  
});

gulp.task('default', function(){
 
gulp.watch('src/scss/style.scss', ['sass']);
  
});
