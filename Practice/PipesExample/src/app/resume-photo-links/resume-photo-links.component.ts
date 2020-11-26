import { Component, OnInit } from '@angular/core';
import { PhotoLinks } from '../Resume-PhotoLinks';

@Component({
  selector: 'app-resume-photo-links',
  templateUrl: './resume-photo-links.component.html',
  styleUrls: ['./resume-photo-links.component.css']
})
export class ResumePhotoLinksComponent implements OnInit {
  resumePhotoLinks: PhotoLinks;
  constructor() { }

  ngOnInit(): void {
    this.resumePhotoLinks = new PhotoLinks();
    this.resumePhotoLinks.github = "github.com/SerhiiNakonechnyi12";
    this.resumePhotoLinks.linkedin = "linkedin.com";
    this.resumePhotoLinks.twitter = "twitter.com";

  }

}
