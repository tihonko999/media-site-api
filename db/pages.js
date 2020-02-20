const text = require('./matter/media/text')
const image = require('./matter/media/image')
const gallery = require('./matter/media/gallery')
const file = require('./matter/media/file')

module.exports = [{
  id: 'contacts',
  title: 'Контакты',
  content_blocks: [text, image, text, gallery, text, text, file, text, text],
}]
