var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    // gulp.watch("app/scss/*.scss", ['sass']);
    // gulp.watch("app/*.html").on('change', reload);
    gulp.watch("*.js").on('change', reload);
});

gulp.task('default', ['serve']);