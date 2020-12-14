import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { StyleExampleComponent } from './style-example/style-example.component';
import { from } from 'rxjs';
import { ToDoItemFormComponent } from './to-do-item-form/to-do-item-form.component';
import { WorkWithServiceComponent } from './work-with-service/work-with-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    StyleExampleComponent,
    ToDoItemFormComponent,
    WorkWithServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
