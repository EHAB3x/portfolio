import { Component } from '@angular/core';
import { FrontendSkillsComponent } from './components/frontend-skills/frontend-skills.component';

@Component({
  selector: 'app-skills-section',
  imports: [FrontendSkillsComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {

}
