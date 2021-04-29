import express from 'express'
import routes from './routes'
import './database'

class App {
  express: express.Application

  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
