import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import Users from './Users'

@Entity('tickets')
export default class Tickets {
  @PrimaryColumn()
  id?: string

  @Column()
  title?: string

  @Column()
  description?: string

  @Column()
  files?: string

  @Column()
  userId?: string

  @Column()
  sector?: string

  @Column()
  subject?: string

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => Users)
  user?: Users

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date

  constructor () {
    if (!this.id) this.id = uuid()
  }
}
