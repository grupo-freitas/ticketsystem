/* eslint-disable no-unused-vars */
import { Request } from 'express'
declare global {
  namespace Express {
    interface Request{
      user: any
    }
  }
}
