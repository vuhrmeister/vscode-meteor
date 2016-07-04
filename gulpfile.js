const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
var typescript = require('typescript');
var gulpTs = require('gulp-typescript');

const sources = [
    'src'
].map((tsFolder) => tsFolder + '/**/*.ts');

var projectConfig = {
    noImplicitAny: false,
    target: 'ES5',
    module: 'commonjs',
    declarationFiles: true,
    typescript
};

gulp.task('build', function () {
    return gulp.src(sources, { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(gulpTs(projectConfig))
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: __dirname }))
        .pipe(gulp.dest('out'));
});

gulp.task('watch', ['build'], function (cb) {
    log('Watching build sources...');
    return gulp.watch(sources, ['build']);
});

gulp.task('default', ['build']);