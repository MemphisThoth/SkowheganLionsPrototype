const config = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano')
  ]
}

module.exports = config;
