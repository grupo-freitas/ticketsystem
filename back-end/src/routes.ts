import { Router } from 'express'

import UsersController from './controllers/UsersController'
import TicketsController from './controllers/TicketsController'
const usersController = new UsersController()
const ticketsController = new TicketsController()

const routes = Router()

routes.get('/', usersController.show)
routes.post('/', usersController.create)

routes.post('/ticket', ticketsController.create)

export default routes
