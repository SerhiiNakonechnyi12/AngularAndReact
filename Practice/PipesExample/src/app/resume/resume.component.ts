import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  resume: Resume;
  constructor() {}

  ngOnInit(): void {
    this.resume = new Resume();
    this.resume.title = 'Nakonechnyi Serhii';
    this.resume.description = 'BackEnd/FrontEnd Web Developer';
    this.resume.expirience;
    this.resume.expirience.push("C#");
    this.resume.expirience.push("ASPNET MVC");
    this.resume.expirience.push("ASPNET Core");
    this.resume.expirience.push("React");
    this.resume.expirience.push("Angular");
    this.resume.expirience.push("NodeJS");
    // this.resume.expirience = new Array("- C#", "- ASPNET MVC");
    // this.resume.expirience = `
    // - C#
    // - ASPNET MVC
    // - ASPNET Core
    // - React
    // - Angular
    // - NodeJS`;
    this.resume.skills; 
    this.resume.skills.push("Create C# Console Applications"); 
    this.resume.skills.push("Create Web Application");
    this.resume.skills.push("Angular");
  }
}
