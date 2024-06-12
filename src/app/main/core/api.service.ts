import { Injectable } from '@angular/core';
import { User } from './data.types.service'
import * as rxjs from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private api = 'https://api.portfolio.sarvarbekabduqodirov.uz:8443/api/users/mail';
  public user: User = {} as User;
  private defaultEmail: string = "abduqodirovsarvar.2002@gmail.com";

  constructor(private http: HttpClient) {}

  getUser(email?: string | null): void {
    this.http.get<User>(`${this.api}/${email ?? this.defaultEmail}`).subscribe({
      next: (response: User) => {
        this.user = response;
      },
      error: (error: Error) => {
        this.handleError(error);
      }
    });
  }

  private handleError(error: Error): void {
    console.error('An error occurred', error); // Replace with your error handling logic
  }
}
