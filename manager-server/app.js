const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const logger = require('koa-logger')
const logger = require('./utils/log4j')
const router = require('koa-router')()
const koajwt = require('koa-jwt')

const users = require('./routes/users')
const util = require('./utils/util')

// error handler
onerror(app)

require('./config/db')

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  logger.info(`${ctx.request.URL} get params: ${JSON.stringify(ctx.request.query)}`)
  logger.info(`${ctx.request.URL} post params: ${JSON.stringify(ctx.request.body)}`)
  await next().catch(err => {
    if (err.status == '401') {
      ctx.body = util.fail('Token认证失败', util.CODE.AUTH_ERROR)
    } else {
      throw err
    }
  })
})

app.use(koajwt({ secret: 'koa2-study' }).unless({
  path: ['/api/users/login']
}))

// routes
router.prefix('/api')
router.use(users.routes(), users.allowedMethods())

app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  // console.error('server error', err, ctx)
  logger.error('err:' + err.stack)
});

module.exports = app
