var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


gulp.task('webserver', function() {

  connect.server({
    livereload: true
  });
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('default', ['styles', 'watch', 'webserver'])
  
 

 
// gulp.task('default', ['webserver']);