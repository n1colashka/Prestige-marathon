const gulp = require('gulp');

const imageMinify = require('./image-minify'),
    styles = require('./styles'),
    script = require('./scripts');
    html = require('./html');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    });

    gulp.watch('app/*.html', gulp.series(html)).on('change', server.reload);
    gulp.watch('app/scss/**/*.scss', gulp.series(styles)).on('change', server.reload);
    gulp.watch('app/js/**/*.js', gulp.series(script)).on('change', server.reload);
    gulp.watch('app/images/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);

    return cb()
};
