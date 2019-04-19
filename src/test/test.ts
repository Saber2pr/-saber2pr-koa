import { Koa } from '../core/saber-koa'

const app = Koa<{ version }>({ version: '0.0.1' })

app.use(async (ctx, next) => {
  if (ctx.request.url === '/') {
    ctx.response.end('Hello World!')
    ctx.version
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

app.listen(3000, () => console.log('http://localhost:3000'))

app.callback() // RequestListener
