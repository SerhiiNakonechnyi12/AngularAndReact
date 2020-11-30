import { Component, OnInit } from "@angular/core";
import {ToDoListItem} from "../to-do-list-item";
import {ITEMS} from "../to-do-list"


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
  //styles: [".toDo{border: 1px solid green}"]
})
export class ToDoListComponent implements OnInit {
  toDoListItem: ToDoListItem ;
  jobs: ToDoListItem[] = ITEMS;
  selectedJob: ToDoListItem;
  car: string;
  imageUrl: string = "../../assets/images/image.jpg";
  constructor() { }

  ngOnInit(): void {
    this.toDoListItem =  {
      id: 1,
      name: "Сделать презентацию на завтра",
      isCompleted: false
    }
    this.selectedJob = this.jobs[0];
    this.car = "Audi";
    //this.jobs =[];
  }

  changeStyle(i){
    console.log(i);
    this.selectedJob = i;
  }

}
