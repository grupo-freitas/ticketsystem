import { getCustomRepository, Repository } from 'typeorm'
import Tickets from '../entities/Tickets'
import Users from '../entities/Users'
import TicketsRepository from '../repositories/TicketsRepository'
import UsersRepository from '../repositories/UsersRepository'

interface ITicketsCreate {
  title: string
  description: string
  files?: string
  userId: string
  subject: string
}

export default class TicketsService {
  ticketsRepository: Repository<Tickets>
  usersRepository: Repository<Users>

  constructor () {
    this.ticketsRepository = getCustomRepository(TicketsRepository)
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create ({ title, description, files, userId, subject }: ITicketsCreate) {
    const user = await this.usersRepository.findOne({ id: userId })

    if (!user) throw new Error('User not found')

    const ticket = this.ticketsRepository.create({
      title,
      description,
      files,
      sector: user.sector,
      userId,
      subject
    })

    await this.ticketsRepository.save(ticket)

    return ticket
  }

  async close (id: string) {
    const ticket = await this.ticketsRepository.findOne({ id })

    if (ticket.status === 'aberto') {
      ticket.status = 'fechado'
    }
  }

  async show () {
    const tickets = await this.ticketsRepository.find()

    if (tickets.length === 0) throw new Error('No tickets registered ')

    return tickets
  }
}
