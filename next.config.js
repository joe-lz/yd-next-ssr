const path = require('path')

module.exports = {
  basePath: '/next-ssr',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}