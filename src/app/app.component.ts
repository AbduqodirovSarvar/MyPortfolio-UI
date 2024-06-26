import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderPageComponent } from './main/pages/light-side/header-page/header-page.component';
import { HomePageComponent } from './main/pages/light-side/home-page/home-page.component';
import { PagesModule } from './main/pages/pages.module';
import { AboutPageComponent } from './main/pages/light-side/about-page/about-page.component';
import { CertificatePageComponent } from './main/pages/light-side/certificate-page/certificate-page.component';
import { ExperiencePageComponent } from './main/pages/light-side/experience-page/experience-page.component';
import { EducationPageComponent } from './main/pages/light-side/education-page/education-page.component';
import { StackPageComponent } from './main/pages/light-side/stack-page/stack-page.component';
import { ProjectPageComponent } from './main/pages/light-side/project-page/project-page.component';
import { FooterPageComponent } from './main/pages/light-side/footer-page/footer-page.component';
import { ContactPageComponent } from './main/pages/light-side/contact-page/contact-page.component';
import { LanguagePageComponent } from './main/pages/light-side/language-page/language-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './main/core/api.service';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ExperiencePageComponent,
    EducationPageComponent,
    CertificatePageComponent,
    LanguagePageComponent,
    StackPageComponent,
    ProjectPageComponent,
    ContactPageComponent,
    FooterPageComponent,
    PagesModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyPortfolio-UI';

  @ViewChild('scroll') sc!: ElementRef;

  email: string | null = null;

  constructor(private apiService: ApiService) {
    this.apiService.getUser(this.email);
  }

  // goToCert(){
  //   console.log(this.sc.nativeElement.scrollHeight);
  //   this.sc.nativeElement.scrollTop = this.sc.nativeElement.scrollHeight;
  // }
}
