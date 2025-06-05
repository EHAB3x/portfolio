import { Component } from '@angular/core';
import { HeroSocialLinksComponent } from "./compoents/hero-social-links/hero-social-links.component";
import { ScrollDownComponent } from "./compoents/scroll-down/scroll-down.component";
import { HeroDataComponent } from "./compoents/hero-data/hero-data.component";

@Component({
  selector: 'app-hero-section',
  imports: [HeroSocialLinksComponent, ScrollDownComponent, HeroDataComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
