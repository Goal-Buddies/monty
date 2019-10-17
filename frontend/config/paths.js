'use strict'

const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  dist: resolveApp('../output'),
  src: resolveApp('./'),
  // srcMain: resolveApp('src/main'),
  // srcComponents: resolveApp('src/components'),
  // srcLayouts: resolveApp('src/layouts'),
  // srcScreens: resolveApp('src/screens'),
  // assets: resolveApp('assets'),
  // images: resolveApp('assets/images'),
  // styles: resolveApp('assets/styles'),
  // templates: {
  //   index: resolveApp('src/templates/index.ejs'),
  // },
  config: resolveApp('config')
}
