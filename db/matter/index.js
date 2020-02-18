const text = require('./media/text')
const image = require('./media/image')
const gallery = require('./media/gallery')
const video = require('./media/video')
const file = require('./media/file')
const widget = require('./media/widget')

module.exports = {
  id: 1,
  title: 'Действительно легкий старт: регистрировать бизнес со Сбербанком стало намного проще',
  lead: 'ПАО «Сбербанк» и АО «Деловая среда» расширяют географию и формы оказания услуг по бесплатной регистрации бизнеса.',
  img: 'https://avatars.mds.yandex.net/get-pdb/1337039/3ba4b155-14c7-46cb-b0b3-eb4a596c6e04/s800',
  content_blocks: [text, image, text, gallery, text, video, text, file, text, widget, text],
}
