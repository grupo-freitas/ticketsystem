import { Request, Response } from 'express'
import UsersService from '../services/UsersService'
import { hashSync, genSaltSync } from 'bcrypt'

export default class UsersController {
  async create (req:Request, res: Response): Promise<Response> {
    const { name, login, password, passwordConfirm, sector } = req.body

    const usersService = new UsersService()

    if (passwordConfirm !== password) res.json({ msg: 'Invalid Password' })

    const salt = genSaltSync(10)

    const newPassword = hashSync(password, salt)

    try {
      const user = await usersService.create({ name, login, password: newPassword, sector })

      user.password = undefined

      return res.status(201).json(user)
    } catch (err) {
      return res.status(400).json({ msg: err.message })
    }
  }

  async show (req:Request, res: Response): Promise<Response> {
    const usersService = new UsersService()

    try {
      const user = await usersService.show()
      return res.status(200).json(user)
    } catch (err) {
      return res.json({ msg: err.message })
    }
  }
}
