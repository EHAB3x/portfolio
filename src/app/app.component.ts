import { Component } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { ServicesSectionComponent } from "./sections/services-section/services-section.component";
import { QualificationsComponent } from "./sections/qualifications/qualifications.component";
import { ProjectsSectionComponent } from "./sections/projects-section/projects-section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ServicesSectionComponent,
    QualificationsComponent,
    ProjectsSectionComponent
],
})
export class AppComponent {
  title = 'portfolio';
}
