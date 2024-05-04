import { Component } from '@angular/core';
import { User, mockData } from '../../../core/data.types.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  user: User = mockData;
}
