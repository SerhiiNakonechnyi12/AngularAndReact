import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('assets/users.json');
  }
}
