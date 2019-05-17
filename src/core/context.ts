/*
 * @Author: saber2pr
 * @Date: 2019-04-30 12:37:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 12:46:13
 */
import { IncomingMessage, ServerResponse } from 'http'

export interface Context {
  request: IncomingMessage
  response: ServerResponse
}

export type ContextType<T> = T & Context
