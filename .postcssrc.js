//ESM: Browser
//CommonJS: Node

// == import autoprefixser from 'autoprefixer'
// const autoprefixer = require('autoprefixer');

/* == export {
  plugins: [
    autoprefixer
  ]
}
*/
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}