var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var connect = require('gulp-connect');
var open = require('gulp-open');

var port = 5090;
var isWindows = /^win/.test(require('os').platform());

var paths = {
    html: {
        src: ['./**/*.html'],
        main: 'index.html'
    },
    js: {
        main: 'app/js/main.js',
        src: ['app/js/**/*.js']
    },
    css: {
        main: 'app/css/main.css',
        src: ['app/css/**/*.css']
    }
};

gulp.task('connect', function() {
    connect.server({
        root: [__dirname],
        port: port,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    var app = (isWindows) ? 'chrome' : 'google-chrome';
    gulp.src(paths.html.main)
        .pipe(open('', {
            url: 'http://localhost:' + port + '/' +paths.html.main,
            app: app
        }));
});


gulp.task('html', function() {
    return gulp.src(paths.html.src)
        .pipe(connect.reload());
});


gulp.task('js', function() {
    return gulp.src(paths.js.src)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src(paths.css.src)
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch(paths.html.src, ['html']);
    gulp.watch(paths.js.src, ['js']);
    gulp.watch(paths.css.src, ['css']);
});

gulp.task('default', ['js', 'css', 'watch', 'open']);

