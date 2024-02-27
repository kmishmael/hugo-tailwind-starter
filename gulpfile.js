var autoprefixer = require('autoprefixer');
const { watch } = require('gulp');

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano');


gulp.task('css-dev', function () {

    return watch('./layouts/**/*.html', { delay: 20 }, async () => {
        return gulp.src('./assets/css/styles.css')
            .pipe(postcss([
                require('tailwindcss'),
                require('autoprefixer'),
            ]))
            .pipe(concatCss('styles.css'))
            .pipe(cssnano({
                reduceIdents: false,
                discardComments: { removeAll: true }
            }))
            .pipe(gulp.dest('static/'));
    })

})

gulp.task('css-build', function () {

    return gulp.src('./assets/css/styles.css')
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer'),
        ]))
        .pipe(concatCss('styles.css'))
        .pipe(cssnano({
            reduceIdents: false,
            discardComments: { removeAll: true }
        }))
        .pipe(gulp.dest('static/'));

})