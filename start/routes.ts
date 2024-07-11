/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const TodosController = () => import('#controllers/todos_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .resource('todos', TodosController)
  .use('*', middleware.auth())

router
  .post('auth/login', [AuthController, 'login'])
