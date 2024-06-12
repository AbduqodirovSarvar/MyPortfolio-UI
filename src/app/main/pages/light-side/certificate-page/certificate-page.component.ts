import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Certificate } from '../../../core/data.types.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-certificate-page',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './certificate-page.component.html',
  styleUrl: './certificate-page.component.scss'
})
export class CertificatePageComponent {
  certificates: Certificate[] = [];
  constructor(private apiService: ApiService){
    this.certificates = apiService.user.certificates;
  }
}
