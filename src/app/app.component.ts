import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { DialogModule } from 'primeng/dialog';
import { TodosComponent } from './todos/todos.component';

export interface Todo {
  ID: string;
  todo: string;
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ButtonModule, NewTodoComponent, TodosComponent],
})
export class AppComponent {
  title = 'todo-ng';
}
