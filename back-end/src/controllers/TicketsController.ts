import { Request, Response } from 'express'
import TicketsService from '../services/TicketsService'

export default class TicketsController {
  async create (req:Request, res: Response): Promise<Response> {
    const ticketsService = new TicketsService()

    const { title, description, files, userId, subject } = req.body

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
}
