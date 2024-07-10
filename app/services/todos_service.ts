import Todo from '#models/todo'

export default class TodosService {
  async all() {
    return Todo.all();
  }
}
