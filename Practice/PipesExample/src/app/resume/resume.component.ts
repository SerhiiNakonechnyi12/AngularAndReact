import { Component, OnInit } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume : Resume;
  constructor() { }

  ngOnInit(): void {
    this.resume = new Resume();
    this.resume.title = "Resume title";
    this.resume.description = "Resume descr";
    this.resume.expirience = "Resume expirience";
    this.resume.skills = "Resume skills";

  }

}
