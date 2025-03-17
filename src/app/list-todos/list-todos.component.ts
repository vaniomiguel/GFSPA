import { DatePipe, NgFor } from '@angular/common';
import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TodoDataService } from '../service/data/todo-data.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  imports: [ DatePipe, MatTableModule, MatButtonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent implements OnInit{

  private todoService = inject(TodoDataService);
  private router = inject(Router);


  displayedColumns: string[] = ['description', 'targetDate', 'done', 'actions'];

  todos: Todo[] = [];
  message = signal("");
  
  
  ngOnInit(): void {
    this.refreshTodos();
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }
  
  deleteTodo(id: number) {
    this.todoService.deleteTodo('in28minutes', id).subscribe(response => {
      this.message.set( `Delete of Todo ${id} successful!`);
      this.refreshTodos();
    });
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

  private refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => this.todos = response
    )
  }
  /*
  = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ];
*/
}
