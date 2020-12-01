import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpMapService {
  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get('assets/users.json').pipe(
      map((data) => {
        let users = data['userList'];
        return users.map((user: any) => {
          return { name: user['userName'], age: user['userAge'] };
        });
      })
    );
  }
}
