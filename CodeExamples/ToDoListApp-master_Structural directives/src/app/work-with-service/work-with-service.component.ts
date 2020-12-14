import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"

@Component({
  selector: 'app-work-with-service',
  templateUrl: './work-with-service.component.html',
  styleUrls: ['./work-with-service.component.css'],
  providers: [DataService]
})
export class WorkWithServiceComponent implements OnInit {

  phoneName: string;
  phones: string[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.phones = this.dataService.getData();
  }

  addPhone(phone: string){
    this.dataService.addItem(phone);
  }

  getPhones(): string[]{
    return this.phones;
  }
}
