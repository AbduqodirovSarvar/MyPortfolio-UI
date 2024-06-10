import { Component, ViewChild, viewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ElementRef, Renderer2 } from '@angular/core';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, RouterLink, RouterOutlet, MatButtonModule, MatCardModule],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent {
  // @ViewChild('sc') sc: Scroller;
  @ViewChild('scroll') sc!: ElementRef;

  navigateToEducation() {
    console.log(this.sc.nativeElement);
    if (this.sc && this.sc.nativeElement) {
      this.sc.nativeElement.scrollTop = 0;
    } else {
      console.error("Scroll element not found or not initialized.");
    }
  }
}
