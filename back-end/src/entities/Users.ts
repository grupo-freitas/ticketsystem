import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('users')
export default class Users {
  @PrimaryColumn()
  id?: string

  @Column()
  name?: string

  @Column()
  login?: string

  @Column()
  password?: string

  @Column()
  sector?: string

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date

  constructor () {
    if (!this.id) this.id = uuid()
  }
}
