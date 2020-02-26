const jsonServer = require('json-server')
const index = jsonServer.create()
const db = require('./db')
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000

index.use(middlewares)
index.use(router)

index.listen(port)
