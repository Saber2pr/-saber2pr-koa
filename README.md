# @saber2pr/koa

> koa in typescript.

```bash
# from npm
npm install @saber2pr/koa

# from github
git clone https://github.com/Saber2pr/-saber2pr-koa.git
```

# Koa

```ts
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
