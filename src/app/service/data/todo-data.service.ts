import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private httpClient = inject(HttpClient);

  constructor() { }

    retrieveAllTodos(username: string) {
      return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    }


    deleteTodo(username: string, id: number) {
      return this.httpClient.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);

    }

    retrieveTodo(username: string, id: number) {
      return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    }
    //Todo deleteById(id: long)
}
