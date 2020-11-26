import { Component, OnInit } from '@angular/core';
import { ResumeExpirience } from '../Resume-Expirience';

@Component({
  selector: 'app-resume-expirience',
  templateUrl: './resume-expirience.component.html',
  styleUrls: ['./resume-expirience.component.css']
})
export class ResumeExpirienceComponent implements OnInit {
  resumeExpirience: ResumeExpirience;
  constructor() { }

  ngOnInit(): void {
    this.resumeExpirience = new ResumeExpirience();
    this.resumeExpirience.expirience;
    this.resumeExpirience.expirience.push("Creating C# Console Applications");
    this.resumeExpirience.expirience.push("Creating Web Application");
    this.resumeExpirience.expirience.push("Working with database");
    this.resumeExpirience.expirience.push("Working witn Azure cloud services");
  }

}
