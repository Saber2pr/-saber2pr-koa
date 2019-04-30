/*
 * @Author: saber2pr
 * @Date: 2019-04-30 12:37:27
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-30 12:37:27
 */
import { Context } from './saber-koa'

export interface This {}

export function ctx<T>(c: This) {
  return c as T & Context
}
