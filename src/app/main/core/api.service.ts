import { Injectable } from '@angular/core';
import { User, mockData } from './data.types.service'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  getUser(email: string): Observable<User> {
    return of(mockData);
  }
}
