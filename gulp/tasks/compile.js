const { src, dest, series, watch } = require('gulp');

//Css
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

//Tools
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');

const paths = {
    src: {
        scss: 'resources/scss/**/*.scss',
        js: 'resources/js/**/*.js'
    },
    dest : {
        css: 'public/css',
        js: 'public/js'
    }
};

//Compila los archivos sass a css
function scssToCss(done) {
    src(paths.src.scss)
        .pipe( sourcemaps.init() )
        .pipe( plumber() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( sourcemaps.write('.') )
        .pipe( dest(paths.dest.css) );

    done();    
}

//minifica los archivos js
function javascript(done){
    src(paths.src.js)
        .pipe( sourcemaps.init() )
        .pipe( concat('app.js') ) 
        .pipe( terser() )
        .pipe(sourcemaps.write('.'))
        .pipe( rename({ suffix: '.min' }) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest(paths.dest.js) );

    done();
}

//Vigila los cambios realizados en los archivos sass y js
function watcher(done) {
    watch('resources/scss/**/*.scss', scssToCss);
    watch('resources/js/**/*.js', javascript);

    done();
}

const compileTasks = series(scssToCss, javascript, watcher);
exports.compileTasks = compileTasks;