import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { isLoggedInGuard } from './guard/is-logged-in.guard';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate: [isLoggedInGuard]},
    {path: 'todos', component: ListTodosComponent, canActivate: [isLoggedInGuard]},
    {path: 'logout', component: LogoutComponent, canActivate: [isLoggedInGuard]},
    {path: 'todos/:id', component: TodoComponent, canActivate: [isLoggedInGuard]},
    {path: '**', component: ErrorComponent}
];
