

let mix = require("laravel-mix")
let fs = require('fs-extra')


let getFiles = function (dir) {
    // get all 'files' in this directory
    // filter directories
    return fs.readdirSync(dir).filter(file => {
        if (!file.startsWith("_")) {
            return fs.statSync(`${dir}/${file}`).isFile();
        }
    });
};


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
*/

mix.before(() => {
    fs.copySync('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'dist/js/bootstrap.bundle.js');
    fs.copySync('node_modules/bootstrap/dist/js/bootstrap.bundle.js.map', 'dist/js/bootstrap.bundle.js.map');
});


mix
    .js('src/js/main.js', 'dist/js')
    .sass('src/scss/main.scss', 'dist/css')

    // uncomment to enable browersync and enter your domain 
    // .browserSync({
        // files: ['dist/css/main.css', 'dist/js/*.js'],
        // proxy: 'my-domain.test'
    // });
