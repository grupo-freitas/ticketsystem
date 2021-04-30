import { Request, Response } from 'express'
import TicketsService from '../services/TicketsService'

export default class TicketsController {
  async create (req:Request, res: Response) {
    const ticketsService = new TicketsService()

    const { title, description, subject } = req.body

    const { id: userId } = req.user

    const filename: any | null = req.files

    let files: string = ''

    for (const i of filename) {
      files += `**${i.filename}`
    }

    try {
      const ticket = await ticketsService.create({
        title,
        description,
        files,
        subject,
        userId
      })

      return res.status(201).json(ticket)
    } catch (err) {
      return res.status(400).json({ msg: err.message })
    }
  }

  async show (req: Request, res: Response): Promise<Response> {
    const ticketsService = new TicketsService()

    try {
      const tickets = await ticketsService.show()

      return res.status(200).json(tickets)
    } catch (err) {
      return res.status(400).json({ msg: err.message })
    }
  }
}
