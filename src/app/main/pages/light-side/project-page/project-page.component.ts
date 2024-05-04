import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project, mockData } from '../../../core/data.types.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  projects: Project[] = mockData.projects;
}
