const path = require('path')
const glob = require('glob')
const fs = require('fs/promises')
const chalk = require('chalk')
const ora = require('ora')
const { init, parse } = require('es-module-lexer')
// const {} = require('./config')

/**
 * 找到需要构建的文件
 * @param {string} pattern 查找目标文件规则
 * @param {string} extendPaths 要排除的特殊文件
 */
function findFiles (pattern, extendPaths) {
  var files = glob.sync(pattern, { matchBase: true })
  if (files && files.length && extendPaths) {
    extendPaths.forEach(path => {
      files = files.filter(file => file.indexOf(path) === -1)
    })
  }
  return files
}

/**
 * 生成入口模版
 * @param {string[]} files 目标文件列表
 * @param {string} baseUrl 基础路径
 */
 async function genTemple (files, baseUrl) {
  let realTemplate = `/* Automatically generated by genEntry function in './bin/generate.js' */
`
  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      // 读取文件内容
      const res = (await fs.readFile(file)).toString()
      await init
      const [, exports] = parse(res)
      // 获取 exports 语法
      for(let j = 0; j < exports.length; j++) {
        let template = ''
        let relativePath = path.relative(baseUrl, file)
        // 获取入口文件到目标文件的相对路径
        relativePath = relativePath.substring(0, relativePath.lastIndexOf('.'))

        const exportName = exports[j]
        if (exportName === 'default') {
          template = `export { default as ${file.substring(
              file.lastIndexOf(path.sep) + 1,
              file.indexOf('.'))} } from './${relativePath}'`
        } else {
          template = `export { ${exportName} } from './${relativePath}'`
        }
        // 合并模版
        realTemplate = `${realTemplate}
${template}`
      }
    }
    return realTemplate
  } catch (err) {
    throw err
  } finally {
    return realTemplate
  }
}

/**
 * 生成入口文件
 * @param {string} options.baseUrl 基础路径
 * @param {string} options.filterPattern 目标文件的查找规则
 * @param {string[]} options.extendPaths 要排除的文件名
 * @param {string} options.outputFile 输出文件名
 */
async function genEntry (options) {
  try {
    const { baseUrl, filterPattern, extendPaths, outputFile } = options
    console.log(chalk.blue(`开始生成入口文件${outputFile}`))
    const spinner = ora(`${outputFile}生成中...`).start()
    const files = findFiles(filterPattern, extendPaths)
    const template = await genTemple(files, baseUrl)
    // 模板写入目标入口文件
    await fs.writeFile(outputFile,
      `${template}
  `
    )
    spinner.succeed(`入口文件${outputFile}生成成功`)
  } catch (err) {
    spinner.fail(`入口文件${outputFile}生成失败`)
    throw err
  }
}

module.exports = {
  findFiles,
  genEntry
}
