import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Certificate, mockData } from '../../../core/data.types.service';

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
  certificates: Certificate[] = mockData.certificates;
}
