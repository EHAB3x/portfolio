import { Component } from '@angular/core';
import { HeroSocialLinksComponent } from "./compoents/hero-social-links/hero-social-links.component";

@Component({
  selector: 'app-hero-section',
  imports: [HeroSocialLinksComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
