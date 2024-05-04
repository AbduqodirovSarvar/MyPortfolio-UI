import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Language, mockData } from '../../../core/data.types.service';

@Component({
  selector: 'app-language-page',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './language-page.component.html',
  styleUrl: './language-page.component.scss'
})
export class LanguagePageComponent {
  languages: Language[] = mockData.languages;
}
