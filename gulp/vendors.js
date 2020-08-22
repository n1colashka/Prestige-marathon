const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/swiper-bundle.js',
    // 'node_modules/owl.carousel/dist/owl.carousel.min.js',
    // 'node_modules/slick-carousel/slick/slick.min.js',
];

module.exports = function vendors(cb) {
    return vendorsScripts.length
        ? gulp.src(vendorsScripts)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('app/js/'))
        : cb();
};
