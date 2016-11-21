var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

var paths = {
    scripts: 'src/js/**/*.*',
    styles: 'src/styles/**/*.*',
    images: 'src/img/**/*.*',
    templates: 'src/views/**/*.html',
    index: 'src/index.html'
};

/**
 * Watch custom files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-less']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Live reload server
 */
gulp.task('webserver', function() {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8888
    });
});

gulp.task('livereload', function() {
    gulp.src(['src/**/*.*'])
        .pipe(watch(['src/**/*.*']))
        .pipe(connect.reload());
});

/**
 * Gulp task
 */
gulp.task('serve', ['webserver', 'livereload', 'watch']);