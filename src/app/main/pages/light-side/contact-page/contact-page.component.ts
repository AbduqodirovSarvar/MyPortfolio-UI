import { Component } from '@angular/core';
import { Social, User } from '../../../core/data.types.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../../../core/api.service';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent {
  contacts: Social[] = [];
  constructor(private apiService: ApiService){
    this.contacts = apiService.user.socials;
  }
}
