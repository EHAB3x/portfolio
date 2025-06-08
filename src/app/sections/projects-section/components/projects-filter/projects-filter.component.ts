import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../../../../core/services/projects-service.service';
import { CommonModule } from '@angular/common';
import { IProjects } from '../../../../core/interfaces/iprojects';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-filter',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-filter.component.html',
  styleUrl: './projects-filter.component.scss',
})
export class ProjectsFilterComponent implements OnInit {
  projects!: IProjects[];
  filteredProjects!: IProjects[];
  categories!: IProjects['category'][];
  category: string = 'all';
  activeTab: number = 0;

  constructor(private projectsService: ProjectsServiceService) {}

  ngOnInit() {
    this.projectsService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
    });

    this.projectsService.getAllProjects().subscribe({
      next: (res) => {
        this.projects = res;
        this.filteredProjects = this.projects;
      },
    });
  }

  setCategory(cat: string) {
    this.category = cat;
    this.setFilteredProjects(this.category);
  }
  setActiveTab(tab: number) {
    this.activeTab = tab;
  }

  setFilteredProjects(category: string) {
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
  }
}
