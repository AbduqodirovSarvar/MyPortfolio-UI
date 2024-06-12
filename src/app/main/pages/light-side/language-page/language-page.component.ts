import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Language } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

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
  languages: Language[] = [];
  constructor(private apiServise: ApiService){
    this.languages = apiServise.user.languages;
  }
}
