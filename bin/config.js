const path = require('path')

exports.tsBaseUrl = tsBaseUrl = path.join(__dirname, '../src')
exports.tsFilterPattern =  path.join(tsBaseUrl, '/**/*.ts')
exports.tsExtendPaths = ['src/index.ts']
exports.tsOutputFile = path.join(tsBaseUrl, './index.ts')

exports.esmBaseUrl = esmBaseUrl = path.join(__dirname, '../dist/lib')
exports.esmFilterPattern =  path.join(esmBaseUrl, '*.js')
exports.esmExtendPaths = ['src/index.js']
exports.esmOutputFile = path.join(esmBaseUrl, './index.esm.js')



