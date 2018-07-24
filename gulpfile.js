var gulp = require('gulp');
var sass = require('gulp-sass');

// Translate SASS to CSS
gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass   
    .pipe(gulp.dest('scss/css'))
  
});

// Watcher to rerun gulp on save
gulp.task('watch', ['browserSync', 'sass', 'imagemin'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
})
