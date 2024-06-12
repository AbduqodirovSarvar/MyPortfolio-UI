import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Experience } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  experiences: Experience[] = [];
  constructor(private apiService: ApiService){
    this.experiences = apiService.user.experiences;
  }
}
