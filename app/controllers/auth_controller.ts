import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ auth, request }: HttpContext) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)
  
    return auth.use('jwt').generate(user)
  }
}