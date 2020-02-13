const matter = require('./matter')

const matters = []
for (let i = 1; i < 100; i++) {
  const item = Object.assign({}, matter)
  item.id = i
  matters.push(item)
}

module.exports = matters
