import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from './task-card/task-card.component';
import { ITask, TASKS } from './models/ITask';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskCardComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  tasks: ITask[] = TASKS;

  CreateTask(task: ITask) {
    this.tasks.push(task);
  }

  RemoveTask(id: number) {
    let index = this.tasks.findIndex(x => x.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  Clear() {
    this.tasks = [];
  }
}