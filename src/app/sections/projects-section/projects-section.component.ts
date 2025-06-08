import { Component } from '@angular/core';
import { ProjectsFilterComponent } from "./components/projects-filter/projects-filter.component";

@Component({
  selector: 'app-projects-section',
  imports: [ProjectsFilterComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

}
