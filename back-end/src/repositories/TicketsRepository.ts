import { EntityRepository, Repository } from 'typeorm'
import Tickets from '../entities/Tickets'

@EntityRepository(Tickets)
export default class TicketsRepository extends Repository<Tickets> {}
