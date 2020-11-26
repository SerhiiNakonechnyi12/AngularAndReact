import { Component, OnInit } from '@angular/core';
import { ResumeSkills } from '../Resume-Skills';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.css']
})
export class ResumeSkillsComponent implements OnInit {
  resumeSkills: ResumeSkills;
  constructor() { }

  ngOnInit(): void {
    this.resumeSkills = new ResumeSkills();
    this.resumeSkills.skills;
    this.resumeSkills.skills.push("C#");
    this.resumeSkills.skills.push("ASPNET MVC");
    this.resumeSkills.skills.push("ASPNET Core");
    this.resumeSkills.skills.push("React");
    this.resumeSkills.skills.push("Angular");
    this.resumeSkills.skills.push("NodeJS");
  }

}
