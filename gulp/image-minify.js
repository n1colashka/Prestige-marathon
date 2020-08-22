const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

// Минификация и оптимизация изображений

module.exports = function imageMinify() {
    return gulp.src(
        'app/images/**/*.{gif,png,jpg,svg,webp}'
    )
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
};
