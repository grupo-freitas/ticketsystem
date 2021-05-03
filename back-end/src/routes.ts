import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multerConfig'
import UsersController from './controllers/UsersController'
import TicketsController from './controllers/TicketsController'
import auth from './middlewares/auth'

const usersController = new UsersController()
const ticketsController = new TicketsController()

const upload = multer(multerConfig)

const routes = Router()

routes.get('/', usersController.show)
routes.post('/', usersController.create)
routes.post('/login', usersController.login)
routes.post('/changePassword', usersController.changePassword)

routes.get('/ticket', ticketsController.show)
routes.post('/ticket', auth, upload.array('files'), ticketsController.create)

export default routes
