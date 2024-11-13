import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask, Priority } from '../models/ITask';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input()
  task?: ITask;

  @Output()
  onRemove = new EventEmitter<number>();

  ChangeStatus() {
    if (this.task?.completed) {
      this.task.completed = false;
    }
    else if (this.task && !this.task.completed) {
      this.task.completed = true;
    }
  }

  Remove() {
    this.onRemove.emit(this.task?.id);
  }
}
