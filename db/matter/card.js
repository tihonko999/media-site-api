const text = require('./media/text')
const image = require('./media/image')
const gallery = require('./media/gallery')
const video = require('./media/video')

module.exports = {
  id: 1,
  slug: 1,
  type: 'card',
  published_date: '2020-02-27',
  title: 'Зимний отдых в Башкирии: как провести время с пользой и радостью',
  lead: 'Медиакорсеть предлагает читателям обзор лучших мест зимнего отдыха в нашей республике.',
  img: 'https://avatars.mds.yandex.net/get-zen_doc/153246/pub_5c9c3cc67825b400af148e37_5c9c7c35687bdd00b34dc423/scale_600',
  description: 'Зима в разгаре. В этом году нам досталась гостеприимная «евро-зима» с мягким характером, с ней хочется дружить, гулять и веселиться на свежем воздухе. Есть прекрасная возможность насладиться зимним отдыхом в полной мере. И чтобы оценить все прелести зимнего отдыха, нужно просто всё увидеть своими глазами. Итак, приглашаем вас!',
  cards: [{
    id: 1,
    title: 'Парк отдыха «Ильмурзино»',
    content_blocks: [text, image],
  }, {
    id: 2,
    title: 'Лазертаг клуб «Рекрут»',
    content_blocks: [text, gallery],
  }, {
    id: 3,
    title: 'Хребет Ялангас',
    content_blocks: [text, video],
  }],
}
