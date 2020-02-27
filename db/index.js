const platform = require('./platform')
const matters = require('./matters')
const cards = require('./matters/cards')
const videos = require('./matters/videos')
const matter = require('./matter')
const card = require('./matter/card')
const pages = require('./pages')

module.exports = {
  platform, pages, matters, matter, cards, card, videos,
}
