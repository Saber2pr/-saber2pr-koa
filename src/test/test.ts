import { Koa } from '../core/saber-koa'

const user = Koa()
  .use(async (ctx, next) => {
    if (ctx.request.url === '/user') {
      ctx.response.end('user!')
    } else {
      await next()
    }
  })
  .use(async (ctx, next) => {
    if (ctx.request.url === '/user/saber2pr') {
      ctx.response.end('saber2pr!')
    } else {
      await next()
    }
  })

// main app
Koa({ version: '0.0.1' })
  .use(async (ctx, next) => {
    if (ctx.request.url === '/') {
      ctx.response.end('Hello World!')
    } else {
      await next()
    }
  })
  .use(async (ctx, next) => {
    if (ctx.request.url === '/version') {
      ctx.response.end(ctx.version)
    } else {
      await next()
    }
  })
  // look here!
  .use(user.body())

  .listen(3000, () => console.log('http://localhost:3000'))
