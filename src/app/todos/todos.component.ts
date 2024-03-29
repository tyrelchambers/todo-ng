import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Todo } from '../app.component';
import axios from 'axios';
import { format } from 'date-fns';
import { NetlifyService } from '../../services/netlify.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TableModule, CardModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private netlifyService: NetlifyService) {}

  async ngOnInit() {
    this.todos = await this.netlifyService.getTodos();
  }
}
