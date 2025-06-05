import { Component } from '@angular/core';
import { HeroSocialLinksComponent } from "./compoents/hero-social-links/hero-social-links.component";
import { ScrollDownComponent } from "./compoents/scroll-down/scroll-down.component";

@Component({
  selector: 'app-hero-section',
  imports: [HeroSocialLinksComponent, ScrollDownComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
