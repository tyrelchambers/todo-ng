import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  templateUrl: './new-todo.component.html',
  standalone: true,
  selector: 'new-todo',
  imports: [ButtonModule, DialogModule],
  styleUrl: './new-todo.component.css',
})
export class NewTodoComponent {
  title = 'New Todo';
  visible: boolean = false;

  showDialog(visible: boolean) {
    this.visible = visible;
  }
}
