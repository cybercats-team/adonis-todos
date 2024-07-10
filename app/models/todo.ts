import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export interface ITodoPayload {
  note: string
}

export interface ITodo extends ITodoPayload {
  id: number
  createdAt: DateTime
  updatedAt: DateTime
}

export default class Todo extends BaseModel implements ITodo {
  static table = 'todos'
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare note: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}