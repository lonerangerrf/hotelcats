'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

const styles = () => {
  
  return gulp.src('app/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass({
      sourcemap: true
    }).on('error', sass.logError))
    .pipe($.postcss())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(reload({ stream: true }));
};

const scripts = () => {
  return gulp.src('app/js/*.js')
		.pipe($.sourcemaps.init())
		.pipe($.babel({
			presets: ['@babel/env']
		}))
		.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'))
    .pipe(reload({ stream: true }));
};

const copyAssets = () => {
  return gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest('build/assets'))
};

const copyHtml = () => {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'))
}

const clean = () => {
  return del(['build']);
};

const watch = (cb) => {
  browserSync.init({
    reloadOnRestart: true,
    notify: false,
    port: 9000,
    startPath: "/",
    server: {
      baseDir: ['app', 'build']
    }
  });

  gulp.watch([
    'app/assets/img/**/*',
    'app/*.html'
	]).on('change', reload);

  gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('app/js/**/*.js', gulp.series('scripts'));

  cb()
};

const serve = gulp.series(
  styles,
  scripts,
  watch
);

const build = gulp.series(
  clean,
  copyHtml,
  styles,
  scripts,
  copyAssets
);

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.copyAssets = copyAssets
exports.copyHtml = copyHtml
exports.clean = clean
exports.serve = serve;
exports.default = serve;
exports.build = build;