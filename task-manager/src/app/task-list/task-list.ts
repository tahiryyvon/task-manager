import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TaskForm } from '../task-form/task-form';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TaskForm],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  displayTaskForm = false;

  tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'Done' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'To Do' },
  ];

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'description', header: 'Description' },
    { field: 'status', header: 'Status' }
  ];

  showTaskForm() {
    this.displayTaskForm = true;
  }
}