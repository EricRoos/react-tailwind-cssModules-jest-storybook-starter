const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')
const doPurge = process.env.PURGE === "1";
let plugins = [
  tailwindcss(),
  autoprefixer(),
]
if(doPurge){
  plugins.push(
    purgecss({
      content: ['./**/*.js']
    })
  );
}
module.exports = {
  plugins: plugins
}
