import { DateTime } from 'luxon'
import { errors } from '@adonisjs/auth'
import { BaseModel, column, beforeCreate, afterFind, beforeUpdate, beforeDelete, beforeFetch } from '@adonisjs/lucid/orm'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { HttpContext } from '@adonisjs/core/http'

const forbiddenError = () => new errors.E_UNAUTHORIZED_ACCESS("Forbidden", { guardDriverName: 'jwt' })

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

  @column()
  declare owner: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static onBeforeCreate(todo: Todo) {
    todo.owner = this.getCurrentUserId();
  }

  @afterFind()
  static onAfterFind(todo: Todo) {
    if (todo.owner !== this.getCurrentUserId()) {
      throw forbiddenError()
    }
  }

  @beforeUpdate()
  static onBeforeUpdate(todo: Todo) {
    this.onAfterFind(todo)
  }

  @beforeDelete()
  static onBeforeDelete(todo: Todo) {
    this.onAfterFind(todo)
  }

  @beforeFetch()
  static onBeforeFetch(query: ModelQueryBuilderContract<typeof Todo>) {
    query.where('owner', this.getCurrentUserId())
  }

  private static getCurrentUserId(): number {
    const { auth } = HttpContext.getOrFail()
    const userId = auth?.user?.id

    if (!userId) {
      throw forbiddenError()
    }

    return userId
  }
}