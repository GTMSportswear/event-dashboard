const gulp = require('gulp');
const sass = require('gulp-sass');
var concat = require('gulp-concat');
var bootstrap = require('./node_modules/bootstrap/package.json');
const webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('sass', () => {
    return gulp.src(['./node_modules/bootstrap/' + bootstrap.sass, './src/styles/main.scss'])
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('style.css'))
                .pipe(gulp.dest('./dist'));
});

gulp.task('webpack', () => {
    return gulp.src('./src/main.js')
                .pipe(webpack(webpackConfig))
                .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('./src/scripts/**/*.js', ['webpack']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'webpack', 'watch']);