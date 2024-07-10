import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return []
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
    return {}
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return {}
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return {}
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    return {}
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return {}
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return {}
  }
}