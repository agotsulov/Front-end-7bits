var gulp = require('gulp');
var concat = require('gulp-concat');

var path = {
    css: './src/**/*.css',
    build: {
        css: './build/styles/',
        html: './build/'
    }
};

gulp.task('default', ['html', 'css']);

gulp.task('html', function () {
    return gulp.src('./src/templates/*.html')
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css', function () {
    return gulp.src(path.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.build.css));
});
