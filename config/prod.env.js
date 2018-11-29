'use strict'
const merge = require('webpack-merge')
const dynamicEnv = require('./dynamic.env')

module.exports = merge(dynamicEnv, {
  NODE_ENV: '"production"'
})
