import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITask, Priority } from '../models/ITask';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output()
  onCreate = new EventEmitter<ITask>();
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priority: [Priority.Low, Validators.required],
      deadline: ["", Validators.required]
    })
  }

  onSubmit() {
    if (!this.taskForm.valid) {
      alert("Invalid data");
      return;
    }

    let task = this.taskForm.value as ITask;

    this.onCreate.emit(task);
  }
}
