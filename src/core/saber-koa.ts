/*
 * @Author: saber2pr
 * @Date: 2019-04-19 20:33:35
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 21:39:49
 */
import { createServer, RequestListener, Server } from 'http'
import { compose, Job } from './compose'
import { ContextType, Context } from './context'

export function Koa(): KoaBody
export function Koa<T>(ctx: ThisType<Context & T>): KoaBody<T>
export function Koa<T>(ctx?: ThisType<Context & T>): KoaBody<T> {
  return new KoaBody<T>(<ContextType<T>>ctx)
}

export class KoaBody<T = Context, J extends Job<T> = Job<T>> {
  constructor(
    public ctx: ContextType<T> = <ContextType<T>>{},
    private jobs: J[] = []
  ) {}

  public body() {
    return compose(...this.jobs)
  }

  public callback(): RequestListener {
    return (request, response) => {
      const ctx = Object.assign(this.ctx, { request, response })
      return this.body()(ctx, () => Promise.resolve())
    }
  }

  public use(...jobs: J[]) {
    this.jobs.push(...jobs)
    return this
  }

  public listen: Server['listen'] = (...args: any) =>
    createServer(this.callback()).listen(...args)
}
