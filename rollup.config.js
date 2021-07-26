
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

const { findFiles } = require('./bin/generate')
const { tsFilterPattern, tsExtendPaths } = require('./bin/config')

export const configs = (() => {
  const files = findFiles(tsFilterPattern, tsExtendPaths)
  return files.map(entry => ({
    input: entry,
    output: {
      dir: 'dist/lib',
      format: 'es'
    },
    plugins: [
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      sourceMaps(),
      json(),
    ]
  }))
})()

export default configs
