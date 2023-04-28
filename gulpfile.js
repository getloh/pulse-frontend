const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


var scssPath = './src/sass/*.scss';

gulp.task('sass', function () {
    return gulp.src(scssPath)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task("sass:watch", function() {
	gulp.watch(scssPath, gulp.series('sass'));
});