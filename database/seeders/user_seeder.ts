import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const email = 'oleksii.serdiukov@apriorit.com'    

    await User.updateOrCreate({ email }, { 
      email,
      fullName: 'Oleksii Serdiukov',
      password: '12345678'
    })
  }
}
