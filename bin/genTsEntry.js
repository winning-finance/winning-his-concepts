const { genEntry } = require('./generate')
const { tsBaseUrl, tsFilterPattern, tsExtendPaths, tsOutputFile} = require('./config')

genEntry({
  baseUrl: tsBaseUrl,
  filterPattern: tsFilterPattern,
  extendPaths: tsExtendPaths,
  outputFile: tsOutputFile
})
