import { getCustomRepository, Repository } from 'typeorm'
import Users from '../entities/Users'
import UsersRepository from '../repositories/UsersRepository'
import { compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import secret from '../config/secret'

interface IUsersCreate{
  name: string
  login: string
  password: string
  sector: string
}

interface IUsersLogin{
  login: string
  password: string
}

export default class UsersService {
  private usersRepository: Repository<Users>

  constructor () {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create ({ name, login, password, sector }: IUsersCreate) {
    const userAlreadyExists = await this.usersRepository.findOne({ login })

    if (userAlreadyExists) throw new Error('User already exists')

    const user = this.usersRepository.create({ name, login, password, sector })

    await this.usersRepository.save(user)

    user.password = undefined

    return user
  }

  async login ({ login, password }: IUsersLogin) {
    const user: string | any = await this.usersRepository.findOne({ login })

    if (!user) throw new Error('user not exists')

    const compare = compareSync(password, user.password)

    if (compare === false) throw new Error('Invalid password')

    user.password = undefined

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '30m' })

    return { user, token }
  }

  async show () {
    const user = await this.usersRepository.find()

    if (user.length === 0) throw new Error('No user registered')

    for (const i of user) i.password = undefined

    return user
  }
}
