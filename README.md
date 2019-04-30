# @saber2pr/koa

[![npm](https://img.shields.io/npm/v/@saber2pr/koa.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/koa)

> koa in typescript.

```bash
# from npm
npm install @saber2pr/koa

# from github
git clone https://github.com/Saber2pr/-saber2pr-koa.git
```

## API

1. compose

   > 组合多个 Job

2. Koa

   > 创建一个应用

## Koa.body

这是个很重要的 API，返回 Koa 应用的 reducers !

它能用来做什么我想你已经猜到了 !

It' s a very useful api, it returns koa-app' s reducers!

I think you have known what it does mean.

# Koa

```ts
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
```

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
