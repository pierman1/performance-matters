var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var critical = require('critical');
var fs = require('fs');

gulp.task('scripts', function() {
    return gulp.src(['./src/assets/js/docs.min.js'])
        .pipe(gulp.dest('./src/dist/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('./src/assets/css/src/docs.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("docs.min.css"))
        .pipe(gulp.dest('./src/dist/css/'));
});

gulp.task('critical', function () {
    const htmlPage = fs.readFileSync('./src/index.html');
    critical.generate({
            inline: false,
            base: './',
            html: htmlPage,
        minify: true,
            src: './src/_base/layout.html',
            css: ['./src/dist/css/bootstrap.css', './src/dist/css/docs.min.css'],
            dest: './src/dist/css/critical.css',
            width: 1920,
            height: 1080
    });

});



gulp.task('default', ['scripts', 'minify-css', 'critical']);
