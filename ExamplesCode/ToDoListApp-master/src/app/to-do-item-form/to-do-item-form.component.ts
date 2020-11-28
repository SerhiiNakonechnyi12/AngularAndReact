import { Component, OnInit, Input } from '@angular/core';
import { ToDoListItem } from '../to-do-list-item';

@Component({
  selector: 'app-to-do-item-form',
  templateUrl: './to-do-item-form.component.html',
  styleUrls: ['./to-do-item-form.component.css']
})
export class ToDoItemFormComponent implements OnInit {
  @Input() innerToDoItem: ToDoListItem;
  constructor() { }

  ngOnInit(): void {
  }

}
