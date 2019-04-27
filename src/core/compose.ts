/*
 * @Author: saber2pr
 * @Date: 2019-04-27 20:08:30
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-27 20:08:30
 */
import { Job, Next } from './saber-koa'

export const compose = <T>(...jobs: (Job<T>)[]): Job<T> => async (ctx, next) =>
  jobs.reduceRight(
    (next: Next, job: Job<T>) => async () => await job(ctx, next),
    next
  )()
