import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-todo',
  providers: [    {provide: MAT_DATE_LOCALE, useValue: 'en-UK'},
    provideNativeDateAdapter()],
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, DatePipe, MatDatepickerModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  private todoService = inject(TodoDataService);
  private route = inject(ActivatedRoute);

  id: number;
  todo: Todo;

  todoForm = new FormGroup({
    description: new FormControl('', Validators.required),
    targetDate: new FormControl(null as unknown as Date, Validators.required),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('in28minutes', this.id).subscribe(
      data => this.todoForm.patchValue({description : data.description, targetDate: new Date(data.targetDate)}));
  }

  saveTodo() {

  }

}
