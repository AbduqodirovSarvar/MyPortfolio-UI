import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/pages/light-side/home-page/home-page.component';
import { StackPageComponent } from './main/pages/light-side/stack-page/stack-page.component';
import { ExperiencePageComponent } from './main/pages/light-side/experience-page/experience-page.component';
import { CertificatePageComponent } from './main/pages/light-side/certificate-page/certificate-page.component';
import { EducationPageComponent } from './main/pages/light-side/education-page/education-page.component';
import { ContactPageComponent } from './main/pages/light-side/contact-page/contact-page.component';
import { ProjectPageComponent } from './main/pages/light-side/project-page/project-page.component';
import { LanguagePageComponent } from './main/pages/light-side/language-page/language-page.component';
import { HeaderPageComponent } from './main/pages/light-side/header-page/header-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: ':email',
    component: AppComponent
  },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouteModule {}
