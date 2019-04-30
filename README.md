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

# Koa

```ts
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
