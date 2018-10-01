const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './docs/'
    }
  });
});
gulp.task('sass', () => {
  return gulp
    .src('docs/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/css/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', ['browserSync', 'sass'], () => {
  gulp.watch('docs/sass/**/*.scss', ['sass']);
  gulp.watch('docs/*.html').on('change', browserSync.reload);
});
