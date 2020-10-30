const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function()  {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })


gulp.task('watch', gulp.series('sass', 'browserSync'), function() {
    gulp.watch('app/scss/styles.scss', function() {
        gulp.run('sass','browserSync');
    });
});

