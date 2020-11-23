import { Component } from '@angular/core';
import { from } from 'rxjs';
import {ToDoListItem} from "../app/to-do-list-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<div>Hello world!</div>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp Angular App';
  getTitle = function():string {
    return this.title;
  }
}
