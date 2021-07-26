const { genEntry } = require('./generate')
const { esmBaseUrl, esmFilterPattern, esmExtendPaths, esmOutputFile} = require('./config')
genEntry({
  baseUrl: esmBaseUrl,
  filterPattern: esmFilterPattern,
  extendPaths: esmExtendPaths,
  outputFile: esmOutputFile
})