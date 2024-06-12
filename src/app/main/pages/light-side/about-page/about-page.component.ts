import { Component } from '@angular/core';
import { User } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  aboutMe: string = "";
  constructor(private apiService: ApiService){
    this.aboutMe = apiService.user.aboutMe;
  }
}
