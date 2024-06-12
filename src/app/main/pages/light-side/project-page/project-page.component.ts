import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  projects: Project[] = [];
  constructor(private apiService: ApiService){
    this.projects = apiService.user.projects;
  }
}
