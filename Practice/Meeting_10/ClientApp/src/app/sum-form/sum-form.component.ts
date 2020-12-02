import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

/*
 - запустить сервер через Run without debuging
 - запусть клиент ng serve --open
*/

@Component({
  selector: 'app-sum-form',
  templateUrl: './sum-form.component.html',
  styleUrls: ['./sum-form.component.css'],
  providers: [HttpService]
})
export class SumFormComponent implements OnInit {
  num1: number;
  num2: number;
  sum: number;
  done: boolean;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

  }
  submit() {
    this.httpService.getSum(this.num1, this.num2).subscribe((data: any) => {
      this.sum = data.result;
      this.done = true;
    });
  }
}
