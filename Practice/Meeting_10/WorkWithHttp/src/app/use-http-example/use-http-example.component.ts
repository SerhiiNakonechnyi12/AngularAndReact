import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { HttpService } from '../http.service';
import { HttpMapService} from "../http-map.service"

@Component({
  selector: 'app-use-http-example',
  templateUrl: './use-http-example.component.html',
  styleUrls: ['./use-http-example.component.css'],
  providers: [HttpMapService]
})
export class UseHttpExampleComponent implements OnInit {
  users: User[];
  constructor(private httpService: HttpMapService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe(data => {
      this.users = data;
    });
  }
}
