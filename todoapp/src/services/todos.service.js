import { api } from './api.service';

export class TodoService {
  static #baseEndPoint = 'todos';

  static createTodo = async (todo) => {
    return api.post({ endPoint: this.#baseEndPoint, data: todo })
  }

  static fetchTodos = async () => {
    return api.get({ endPoint: this.#baseEndPoint })
  }

  static updateTodo = async (id, todo) => {
    return api.put({ endPoint: `${this.#baseEndPoint}/${id}`, data: todo })
  }

  static deleteTodo = async (id) => {
    return api.delete({ endPoint: `${this.#baseEndPoint}/${id}` })
  }

  static fetchTodoById = async (id) => {
    return api.get({ endPoint: `${this.#baseEndPoint}/${id}` })
  }
}
