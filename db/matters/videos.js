const clone = require('lodash.clonedeep')
const matter = clone(require('../matter'))
const generate = require('./generate')

matter.type = 'video'
module.exports = generate(matter)
