import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Experience, mockData } from '../../../core/data.types.service';

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
  experiences: Experience[] = mockData.experiences;
}
