import { Component, OnInit } from '@angular/core';
import { Hobbie } from '../Hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbie : Hobbie;
  constructor() { }

  ngOnInit(): void {
    this.hobbie = new Hobbie();
    this.hobbie.title = "Hobbie 1";
    this.hobbie.desription = "Description 1";

  }

}
