const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

gulp.task('sass', () => {
    return gulp.src('./styles/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('dist/styles'));
});

gulp.task('webpack', () => {
    return gulp.src('webpackfile')
                .pipe(webpack())
                .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    
});
