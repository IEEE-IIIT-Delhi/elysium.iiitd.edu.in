const path = require('path')
const imagemin = require('imagemin')
const webp = require('imagemin-webp')

const webpOptions = {
  quality: 75,
  lossless: false,
  force: true
}

const sources = [
  { // Sponsors
    input: path.resolve('./static/images/sponsors/') + '/*',
    output: path.resolve('./__sapper__/export/images/sponsors/')
  },
  { // People
    input: path.resolve('./static/images/people/') + '/*',
    output: path.resolve('./__sapper__/export/images/people/')
  }
]

for (const source of sources) {
  imagemin([source.input], {
    destination: source.output,
    plugins: [webp(webpOptions)]
  })
}
