const path = require('path')
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const pkg = process.env.TARGET
const resolve = (p) => {
  return path.resolve(`${__dirname}/packages/${pkg}`, p)
}
const { buildOptions } = require(resolve('package.json'))
const formatMap = {
  esm: {
    file: resolve(`dist/${pkg}.esm.js`),
    format: 'esm'
  },
  cjs: {
    file: resolve(`dist/${pkg}.cjs.js`),
    format: 'cjs'
  },
  umd: {
    file: resolve(`dist/${pkg}.js`),
    format: 'umd'
  }
}
const createConfig = (output) => {
  output.name = buildOptions.name
  return {
    input: resolve('src/index.js'),
    output,
    plugins: [
      json(),
      nodeResolve()
    ]
  }
}

const configs = buildOptions.formats.map(format => createConfig(formatMap[format]))

module.exports = configs
