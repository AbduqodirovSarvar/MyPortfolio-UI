import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Education } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.scss'
})
export class EducationPageComponent {
  educations: Education[] = [];
  constructor(private apiService: ApiService){
    this.educations = apiService.user.educations;
  }
}
