import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../../../../core/services/projects-service.service';
import { CommonModule } from '@angular/common';
import { IProjects } from '../../../../core/interfaces/iprojects';

@Component({
  selector: 'app-projects-filter',
  imports: [CommonModule],
  templateUrl: './projects-filter.component.html',
  styleUrl: './projects-filter.component.scss',
})
export class ProjectsFilterComponent implements OnInit {
  categories!: IProjects['category'][];
  category: string = 'all';
  activeTab: number = 1;

  constructor(private projectsService: ProjectsServiceService) {}

  ngOnInit() {
    this.projectsService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
    });
  }

  setCategory(cat: string) {
    this.category = cat;
    console.log(this.category);

  }
  setActiveTab(tab: number) {
    this.activeTab = tab;
  }
}
