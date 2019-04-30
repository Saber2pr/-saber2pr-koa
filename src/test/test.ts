import { Koa } from '../core/saber-koa'
const app = Koa({ version: '0.0.1' })

app
  .use(async (ctx, next) => {
    if (ctx.request.url === '/') {
      ctx.response.end('Hello World!')
    }
    await next()
  })

  .use(async (ctx, next) => {
    if (ctx.request.url === '/user') {
      ctx.response.end('user!')
    }
    await next()
  })

  .use(async (ctx, next) => {
    if (ctx.request.url === '/user/saber2pr') {
      ctx.response.end('saber2pr!')
    }
    await next()
  })

  .use(async ctx => {
    if (ctx.request.url === '/version') {
      ctx.response.end(ctx.version)
    }
  })

  .listen(3000, () => console.log('http://localhost:3000'))
