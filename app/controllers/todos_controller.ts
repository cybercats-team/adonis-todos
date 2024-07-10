import { inject } from '@adonisjs/core'
import TodosService from '#services/todos_service'
import { TodoValidator } from '#validators/todo_validator'
import type { HttpContext } from '@adonisjs/core/http'

@inject()  
export default class TodosController {  
  constructor(protected todos: TodosService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.todos.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { note } = await TodoValidator.validate(request.all())

    return this.todos.add(note)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const { id } = params

    return this.todos.get(id)
  }


  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const { id } = params
    const { note } = await TodoValidator.validate(request.all())

    return this.todos.update(id, note)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const { id } = params

    return this.todos.remove(id)
  }

  /** 
   * Not used by REST API 
   */
  async create({ request }: HttpContext) {}
  async edit({ params }: HttpContext) {}
}