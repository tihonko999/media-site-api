const text = require('./matter/media/text')
const image = require('./matter/media/image')
const gallery = require('./matter/media/gallery')
const video = require('./matter/media/video')
const file = require('./matter/media/file')
const widget = require('./matter/media/widget')

module.exports = [{
  id: 'contacts',
  title: 'Контакты',
  content_blocks: [text, image, text, gallery, text, video, text, file, text, widget, text],
}]
