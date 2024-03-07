import { FormGroup } from '@angular/forms';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { format } from 'date-fns';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetlifyService {
  private baseUrl = `${environment.apiUrl}/.netlify/functions`;

  async getTodos() {
    const data = await axios.get(`${this.baseUrl}/get-todos`);

    return data.data.map((d: any) => ({
      ID: d.ID,
      todo: d.todo,
      createdAt: format(new Date(d.createdAt), 'yyyy-MM-dd'),
    }));
  }

  async createTodo(data: FormGroup) {
    const todos = await axios.get(`${this.baseUrl}/create-todo`, {
      params: {
        title: data.get('title')?.value,
      },
    });

    return todos;
  }
}
