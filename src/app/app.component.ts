import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, FooterComponent, HeroSectionComponent],
})
export class AppComponent {
  title = 'portfolio';
}
