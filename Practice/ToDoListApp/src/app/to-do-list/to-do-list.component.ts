import { Component, OnInit } from '@angular/core';
import { ToDoListItem } from "../to-do-list-item";
import {ITEMS} from '../to-do-list'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoListItem: ToDoListItem;
  jobs: ToDoListItem[] = ITEMS;

  loggedIn = false;

  constructor() { }

  ngOnInit(): void {
    this.toDoListItem = {
      id: 1,
      name: "Сделать презентацию на завтра",
      isCompleted: false
    }
    this.jobs =[];
  }

}
