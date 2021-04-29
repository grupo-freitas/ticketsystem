import { getCustomRepository, Repository } from 'typeorm'
import Users from '../entities/Users'
import UsersRepository from '../repositories/UsersRepository'

interface IUsersCreate{
  name: string
  login: string
  password: string
  sector: string
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

    return user
  }

  async show () {
    const user = await this.usersRepository.find()

    if (user.length === 0) throw new Error('No registered user')

    return user
  }
}
