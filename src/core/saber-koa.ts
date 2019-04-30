/*
 * @Author: saber2pr
 * @Date: 2019-04-19 20:33:35
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-27 20:09:52
 */
import {
  ServerResponse,
  IncomingMessage,
  createServer,
  RequestListener,
  Server
} from 'http'
import { compose } from './compose'

export type Next = () => Promise<any>

export type Job<T = {}> = (ctx: Context & T, next: Next) => Promise<void>

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
  constructor(public ctx: T = <T>{}, private jobs: J[] = []) {}

  public callback(): RequestListener {
    return (request, response) => {
      const ctx = Object.assign({ request, response }, this.ctx)
      return compose<T>(...this.jobs)(ctx, () => Promise.resolve())
    }
  }

  public use(...jobs: J[]) {
    this.jobs.push(...jobs)
    return this
  }

  public listen: Server['listen'] = (...args: any) =>
    createServer(this.callback()).listen(...args)
}
