import * as AOS from 'aos';
import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../../../../core/services/projects-service.service';
import { CommonModule } from '@angular/common';
import { IProjects } from '../../../../core/interfaces/iprojects';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { LoaderComponent } from '../../../../shared/loader/loader.component';

@Component({
  selector: 'app-projects-filter',
  imports: [CommonModule, ProjectCardComponent, LoaderComponent],
  templateUrl: './projects-filter.component.html',
  styleUrl: './projects-filter.component.scss',
})
export class ProjectsFilterComponent implements OnInit {
  projects!: IProjects[];
  filteredProjects!: IProjects[];
  categories!: IProjects['category'][];
  category: string = 'all';
  activeTab: number = 0;
  categoriesLoading = true;
  projectsLoading = true;
  errorMessage = '';

  constructor(private projectsService: ProjectsServiceService) {}

  ngOnInit() {
    this.projectsService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
        this.categoriesLoading = false;
      },
      error: () => {
        this.categoriesLoading = false;
        this.errorMessage = 'Projects are unavailable right now. Please try again later.';
      },
    });

    this.projectsService.getAllProjects().subscribe({
      next: (res) => {
        this.projects = res;
        this.filteredProjects = this.projects;
        this.projectsLoading = false;
        setTimeout(() => AOS.refresh(), 0);
      },
      error: () => {
        this.projectsLoading = false;
        this.errorMessage = 'Projects are unavailable right now. Please try again later.';
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
    setTimeout(() => AOS.refresh(), 0);
  }

  get loading(): boolean {
    return this.categoriesLoading || this.projectsLoading;
  }
}
