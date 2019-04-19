import { Koa } from '../core/saber-koa'

const app = Koa<{ request: 'aaa'; a }>({ request: 'aaa', a: '' })

app.use(async (ctx, next) => {
  if (ctx.request.url === '/') {
    ctx.response.end('Hello World!')
    ctx.a
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.request.url === '/user') {
    ctx.response.end('user!')
  }
})

app.use(async (ctx, next) => {
  if (ctx.request.url === '/user/saber2pr') {
    ctx.response.end('saber2pr!')
  }
})

app.server().listen(3000, () => console.log('http://localhost:3000'))
