/*
  use esm to allow loading CommonJS module (Tailwind) or ES6 module (Chakra):
*/
require = require('esm')(module);
module.exports = require('./main.js');
