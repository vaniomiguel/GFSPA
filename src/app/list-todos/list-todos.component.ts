import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


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
  imports: [ DatePipe, MatTableModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent {
  displayedColumns: string[] = ['description', 'targetDate', 'done'];

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ];

}
