import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent},
    {path: 'todos', component: ListTodosComponent},
    {path: '**', component: ErrorComponent}
];
