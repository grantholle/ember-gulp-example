var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    bg     = require('gulp-bg');

var jsDir = 'public/assets/javascripts';

gulp.task('js-dependencies', function()
{
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/handlebars/handlebars.js',
    'bower_components/ember/ember.js',
  ])
  .pipe(concat('dependencies.js'))
  .pipe(gulp.dest(jsDir));
});

gulp.task('compile-app', function()
{
  return gulp.src([
    'app/app.js',
    'app/router.js',
    'app/helpers/*.js',
    'app/controllers/*.js',
    'app/models/*.js',
    'app/views/*.js',
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest(jsDir));
});

gulp.task('compile-handlebars', bg("./precompile-handlebars.sh"));

gulp.task('watch', function()
{
  gulp.watch(['app/templates/**/*.handlebars'], ['compile-handlebars']);
  gulp.watch('app/**/*.js', ['compile-app']);
});

gulp.task('php-server', bg(
  "php",
  "-S", "localhost:8000",
  "-t", "public/",
  "public/router.php"
));

gulp.task('default', [
  'js-dependencies',
  'compile-app',
  'compile-handlebars',
  'watch',
]);

gulp.task('server', ['default', 'php-server']);
