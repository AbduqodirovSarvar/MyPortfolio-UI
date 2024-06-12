import { Component } from '@angular/core';
import { User } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private apiService: ApiService){
    this.user = apiService.user;
  }
  user: User = {} as User;
  currentDate = new Date();
  birthDate = new Date(this.user.birthDay);
  age: any = this.currentDate.getFullYear() - this.birthDate.getFullYear();
}
