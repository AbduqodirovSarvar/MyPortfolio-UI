import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, RouterLink, RouterOutlet, MatButtonModule, MatCardModule],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent {
  // @ViewChild('sc') sc: Scroller;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  navigateToEducation() {
    const scrollContainer = this.el.nativeElement;
    const scrollTo = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    this.renderer.setProperty(scrollContainer, 'scrollTop', scrollTo);
  }

}
