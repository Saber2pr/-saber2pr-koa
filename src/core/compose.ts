/*
 * @Author: saber2pr
 * @Date: 2019-04-30 12:47:04
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-30 12:47:04
 */
import { Context, ContextType } from './context'

export type Next = () => Promise<any>

export type Job<T = Context> = (
  ctx: ContextType<T>,
  next: Next
) => Promise<void>

export const compose = <T>(...jobs: (Job<T>)[]): Job<T> => async (ctx, next) =>
  jobs.reduceRight(
    (next: Next, job: Job<T>) => async () => await job(ctx, next),
    next
  )()
