const { src, dest, series } = require('gulp');

//Images
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const cache = require('gulp-cache');
const svgmin = require('gulp-svgmin');
const imagemin = require('gulp-imagemin');
var ico = require('gulp-to-ico');

const paths = {
    src: {
        img: 'resources/assets/img/**/*.{png,jpg}',
        svg: 'resources/assets/img/**/*.svg'
    },
    dest : {
        img: 'public/assets/img'
    }
};

const option = [
    { quality: 50 },
    { optinizationLevel: 3 }
];

//Convierte imagenes a formato webp
function imgToWebp(done) {
    src(paths.src.img)
        .pipe( webp(option[0]) )
        .pipe( dest(paths.dest.img) );

    done();
}

//Convierte imagenes a formato avif
function imgToAvif(done) {
    src(paths.src.img)
        .pipe( avif(option[0]) )
        .pipe( dest(paths.dest.img) );

    done();
}

//Minifica los archivos svg
function svgMinify(done){
    src(paths.src.svg)
        .pipe( svgmin() )
        .pipe( dest(paths.dest.img) );

    done();
}

// Reduce el peso de la imagen
function optimizeImgSize(done){
    src(paths.src.img)
        .pipe( cache(imagemin(option[1])) )
        .pipe( dest(paths.dest.img) );

    done();
}

function pngToIco(done){
    src('resources/assets/img/bienes_raices.png')
        .pipe(ico('favicon.ico', { resize: true, sizes: [16, 24, 32, 64] }))
        .pipe( dest(paths.dest.img) );

    done();
}

const imgTasks = series(imgToWebp, imgToAvif, svgMinify, optimizeImgSize, pngToIco);
exports.imgTasks = imgTasks;