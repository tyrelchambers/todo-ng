import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Todo } from '../app.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import axios from 'axios';
import { NetlifyService } from '../../services/netlify.service';

@Component({
  templateUrl: './new-todo.component.html',
  standalone: true,
  selector: 'new-todo',
  imports: [ButtonModule, DialogModule, ReactiveFormsModule, InputTextModule],
  styleUrl: './new-todo.component.css',
})
export class NewTodoComponent {
  title = 'New Todo';
  visible: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private netlifyService: NetlifyService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  showDialog(visible: boolean) {
    this.visible = visible;
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.netlifyService.createTodo(this.form);

    this.visible = false;
  }
}
