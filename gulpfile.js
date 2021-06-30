const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create(); 
// complie scss into css
function style()
{
  //1. where is my scss file
  return gulp.src('./src/assets/scss/**/*.scss')
  //2. pass that file through css compiler
  .pipe(sass())
  //3. where do i save the compiled css file.
   .pipe(gulp.dest('./src/assets/css'))
   //4. stream changes to all browser
   .pipe(browserSync.stream());

}
function minifying(){
  return gulp.src('./src/assets/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./src/assets/buildJs'));
}
function watch(){
  browserSync.init({
    server:{
      baseDir: './src',
      // index:'./src/index.html'
    }
  });
  gulp.watch('./src/assets/scss/**/*.scss',style);
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./src/assets/js/**/*.js').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;
exports.minifying = minifying;







