import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

export interface Todo {
  ID: string;
  todo: string;
  createdAt: Date;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TableModule, CardModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];
}
