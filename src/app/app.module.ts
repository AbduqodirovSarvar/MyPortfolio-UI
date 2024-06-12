import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  providers: [provideHttpClient(withFetch())],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class AppModule { }
