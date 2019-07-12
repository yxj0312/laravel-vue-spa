const mix = require('laravel-mix');

require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .tailwind()
   .override(config => {
      let svgRule = config.module.rules.find(
         rule => rule.test.test('.svg')
      ).exclude = /\.svg/;

      // until above,
      // webpack intercept a require for not a standard javascript module, but a svg file
      // which is a html, not a javascript
      // so webpack did check: do i have a rule to transform this into a module?
      // so we will get a 'Module parse failed: Unexpected token(1:0)' issue

      config.module.rules.push({
         test:/\.svg$/,
         // html-loader is avaiable in laravel-mix
         use: [{ loader: 'html-loader'}]
      });
   });
