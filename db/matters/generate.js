module.exports = matter => {
  const matters = []
  for (let i = 1; i < 30; i++) {
    const item = Object.assign({}, matter)
    item.id = i
    item.slug = i
    matters.push(item)
  }
  return matters
}
