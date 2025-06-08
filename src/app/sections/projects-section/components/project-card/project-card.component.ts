import { Component, Input } from '@angular/core';
import { IProjects } from '../../../../core/interfaces/iprojects';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowRight } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-project-card',
  imports: [NgIcon],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapArrowRight,
    }),
  ],
})
export class ProjectCardComponent {
  @Input() item!: IProjects;
}
