import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomePageComponent } from './main/pages/light-side/home-page/home-page.component';
import { StackPageComponent } from './main/pages/light-side/stack-page/stack-page.component';
import { ExperiencePageComponent } from './main/pages/light-side/experience-page/experience-page.component';
import { CertificatePageComponent } from './main/pages/light-side/certificate-page/certificate-page.component';
import { EducationPageComponent } from './main/pages/light-side/education-page/education-page.component';
import { ContactPageComponent } from './main/pages/light-side/contact-page/contact-page.component';
import { ProjectPageComponent } from './main/pages/light-side/project-page/project-page.component';
import { ApplicationConfig, NgModule } from '@angular/core';
import { LanguagePageComponent } from './main/pages/light-side/language-page/language-page.component';
import { HeaderPageComponent } from './main/pages/light-side/header-page/header-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "header", component: HeaderPageComponent},
  {path: "home", component: HomePageComponent},
  {path: "stacks", component: StackPageComponent},
  {path: "experiences", component: ExperiencePageComponent},
  {path: "educations", component: EducationPageComponent},
  {path: "certificates", component: CertificatePageComponent},
  {path: "projects", component: ProjectPageComponent},
  {path: "contacts", component: ContactPageComponent},
  {path: "languages", component: LanguagePageComponent}
];

// export const appConfig: ApplicationConfig ={
//   providers:[provideRouter(routes)]
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouteModule{}
