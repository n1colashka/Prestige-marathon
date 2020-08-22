const gulp = require('gulp');

const vendors = require('./gulp/vendors'),
    clean = require('./gulp/clean'),
    fonts = require('./gulp/fonts'),
    styles = require('./gulp/styles'),
    imageWebp = require('./gulp/image-webp'),
    imageMinify = require('./gulp/image-minify'),
    serve = require('./gulp/serve'),
    scripts = require('./gulp/scripts'),
    html = require('./gulp/html');


const build = gulp.parallel(html, styles, scripts, vendors, imageWebp, imageMinify, fonts);

exports.default = gulp.series(clean, build, serve);