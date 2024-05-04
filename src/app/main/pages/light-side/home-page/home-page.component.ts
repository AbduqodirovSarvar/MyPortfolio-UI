import { Component } from '@angular/core';
import { User, mockData } from '../../../core/data.types.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  user: User = mockData;
  currentDate = new Date();
  birthDate = new Date(this.user.birthDay);
  age: number = this.currentDate.getFullYear() - this.birthDate.getFullYear();
}
