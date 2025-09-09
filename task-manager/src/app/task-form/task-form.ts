import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    TextareaModule
  ],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskForm {
  @Input() display = false;
  @Output() displayChange = new EventEmitter<boolean>();

  // Dummy task data
  task = { title: '', description: '' };

  close() {
    this.displayChange.emit(false);
  }

  save() {
    // Logic to save the task will go here
    console.log('Task saved:', this.task);
    this.close();
  }
}
