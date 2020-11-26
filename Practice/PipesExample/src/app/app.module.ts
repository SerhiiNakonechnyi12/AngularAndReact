import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeExpirienceComponent } from './resume-expirience/resume-expirience.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    HobbiesComponent,
    ResumeComponent,
    ResumeExpirienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
