/*
 * @Author: saber2pr
 * @Date: 2019-04-19 20:33:35
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-19 20:56:56
 */
import {
  ServerResponse,
  IncomingMessage,
  createServer,
  RequestListener,
  Server
} from 'http'

export type Next = () => Promise<any>

export type Job<T> = (ctx: Context & T, next: Next) => Promise<void>

export interface Context {
  request: IncomingMessage
  response: ServerResponse
}

export function Koa(): KoaBody
export function Koa<T>(ctx: T): KoaBody<T>
export function Koa<T>(ctx?: T): KoaBody<T> {
  return new KoaBody<T>(ctx)
}

export class KoaBody<T = Context, J extends Job<T> = Job<T>> {
  constructor(ctx?: T) {
    this.jobs = []
    this.ctx = ctx
  }

  private jobs: J[]
  public ctx: T

  public callback(): RequestListener {
    return (request, response) => {
      const ctx = Object.assign({ request, response }, this.ctx)
      const reducer = (next: Next, job: J) => async () => await job(ctx, next)
      return this.jobs.reduceRight(reducer, null)()
    }
  }

  public use(...jobs: J[]) {
    this.jobs.push(...jobs)
    return this
  }

  public listen: Server['listen'] = (...args) => {
    return createServer(this.callback()).listen(...args)
  }
}
