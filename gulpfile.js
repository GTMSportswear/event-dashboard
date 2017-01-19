const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('sass', () => {
    return gulp.src('./src/styles/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('dist/styles'));
});

gulp.task('webpack', () => {
    return gulp.src('./src/main.js')
                .pipe(webpack(webpackConfig))
                .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    
});


gulp.task('default', ['sass', 'webpack']);