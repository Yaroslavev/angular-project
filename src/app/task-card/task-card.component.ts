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

  ChangePriority() {
    switch (this.task?.priority) {
      case Priority.Low:
        this.task.priority = Priority.Medium;
        break;
      case Priority.Medium:
        this.task.priority = Priority.High;
        break;
      case Priority.High:
        this.task.priority = Priority.Low;
        break;
    }
  }

  Remove() {
    this.onRemove.emit(this.task?.id);
  }
}
