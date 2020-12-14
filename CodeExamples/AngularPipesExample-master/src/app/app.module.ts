import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { JoinPipe } from './join.pipe';
import {WeatherInfoComponent} from "../app/weather-info/weather-info.component"
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    WeatherInfoComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
