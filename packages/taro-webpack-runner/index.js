const { buildProd, buildDev } = require('./src')

module.exports = function (config) {
  if (config.isWatch) {
    return buildDev(config)
  }
  buildProd(config)
}
