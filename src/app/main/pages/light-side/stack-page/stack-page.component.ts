import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../../core/data.types.service';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-stack-page',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './stack-page.component.html',
  styleUrl: './stack-page.component.scss'
})
export class StackPageComponent {
 skills: Skill[] = [];
 constructor(private apiService: ApiService){
  this.skills = apiService.user.skills;
 }
}
