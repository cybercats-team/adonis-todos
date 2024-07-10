import Todo from '#models/todo'

export default class TodosService {
  async all() {
    return Todo.all();
  }

  async add(note: string) {
    const todo = await Todo.create({ note })

    return todo.serialize()
  }

  async get(id: number) {
    const todo = await Todo.findOrFail(id)

    return todo.serialize()
  }

  async update(id: number, note: string) {
    const todo = await Todo.findOrFail(id)

    todo.merge({ note })
    await todo.save()
    
    return todo.serialize()
  }

  async remove(id: number) {
    const todo = await Todo.findOrFail(id)

    await todo.delete()    
    return todo.serialize()
  }
}
