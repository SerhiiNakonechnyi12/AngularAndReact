import { Component, OnInit } from '@angular/core';
import localeRu from "@angular/common/locales/ru";
import {registerLocaleData} from "@angular/common";
registerLocaleData(localeRu, "ru");

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {
  pi : number = 3.1415;
  message: string;
  x : number = 1.23;
  dateFromString: string = "Tue Nov 24 2020 18:54:58 GMT+0200";
  dateFromObject: Date = new Date(2020, 10, 24);
  dateFromNumber: number = 1606236898844;
  technologies: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.message = "Angular is one of the best front-ent frameworks";
    this.technologies.push("C#");
    this.technologies.push("ASP.NET Core");
    this.technologies.push("HTML");
    this.technologies.push("Azure");
    this.technologies.push("AWS");
    this.technologies.push("Angular");

  }

}
