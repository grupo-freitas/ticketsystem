import express from 'express'
import routes from './routes'
import path from 'path'
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
    this.express.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')))
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
