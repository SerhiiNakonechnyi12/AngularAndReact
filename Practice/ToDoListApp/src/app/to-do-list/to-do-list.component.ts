import { Component, OnInit } from '@angular/core';
import { ToDoListItem } from "../to-do-list-item";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoListItem: ToDoListItem; 
  
  constructor() { }

  ngOnInit(): void {
    this.toDoListItem = {
      id: 1,
      name: "Сделать презентацию на завтра",
      isCompleted: false
    }
  }

}
