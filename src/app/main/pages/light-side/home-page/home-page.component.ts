import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit  {
  user: User = {} as User;
  imgUrl: string = '';
  currentDate = new Date();
  age: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.user = this.apiService.user;
    this.imgUrl = this.user?.photoUrl ?? "../../../../../assets/images/IMG_20230204_153927.jpg";
    this.calculateAge();
  }

  calculateAge() {
    const birthDate = new Date(this.user.birthDay);
    this.age = this.currentDate.getFullYear() - birthDate.getFullYear();
  }
}
