'use strict'

const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)


module.exports = {
  frontend: resolveApp('./'),
  config: resolveApp('config'),
  output: resolveApp('../output'),
  app: resolveApp('src/app'),
  styles: resolveApp('src/styles'),
  assets: resolveApp('src/styles/assets'),
  fonts: resolveApp('src/styles/assets/fonts'),
  // images: resolveApp('src/styles/assets/images'),
  templates: {
    home: resolveApp('src/app/home/template.ejs'),
  },
  // srcMain: resolveApp('src/main'),
  // srcComponents: resolveApp('src/components'),
  // srcLayouts: resolveApp('src/layouts'),
  // srcScreens: resolveApp('src/screens'),
}
