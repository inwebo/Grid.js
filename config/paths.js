const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Documentation
  docs_in: path.resolve(__dirname, '../_docs'),

  // Documentation
  docs_out: path.resolve(__dirname, '../docs'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}
