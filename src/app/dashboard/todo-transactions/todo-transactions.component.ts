import { Component } from '@angular/core';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';


interface TodoItem {
  title: string;
  description: string;
} 


@Component({
  selector: 'app-todo-transactions',
  standalone: true,
  imports: [SideNavComponent,CommonModule],
  templateUrl: './todo-transactions.component.html',
  styleUrl: './todo-transactions.component.css'
})

export class TodoTransactionsComponent {
  todoItems: TodoItem[] = [
    { title: 'Task 1', description: 'Description for Task 1' },
    { title: 'Task 2', description: 'Description for Task 2' },
    { title: 'Task 3', description: 'Description for Task 3' }
  ];

}
