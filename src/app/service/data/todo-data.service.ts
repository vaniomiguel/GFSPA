import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { TODO_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private httpClient = inject(HttpClient);

  constructor() { }

    retrieveAllTodos(username: string) {
      return this.httpClient.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    }


    deleteTodo(username: string, id: number) {
      return this.httpClient.delete<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);

    }

    retrieveTodo(username: string, id: number) {
      return this.httpClient.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    }

    updateTodo(username: string, id: number, todo: Todo) {
      console.log("Todo ", todo)
      return this.httpClient.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
    }

    createTodo(username: string, todo: Todo) {
      console.log("Todo ", todo)
      return this.httpClient.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
    }
    //Todo deleteById(id: long)
}
