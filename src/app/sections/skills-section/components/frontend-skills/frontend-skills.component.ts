import { Component, OnInit } from '@angular/core';
import { SkillsApiService } from '../../../../core/services/skills-api.service';
import { ISkills } from '../../../../core/interfaces/iskills';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckBadge } from '@ng-icons/heroicons/outline';
import { LoaderComponent } from '../../../../shared/loader/loader.component';

@Component({
  selector: 'app-frontend-skills',
  imports: [CommonModule, NgIcon, LoaderComponent],
  templateUrl: './frontend-skills.component.html',
  styleUrl: './frontend-skills.component.scss',
  viewProviders: [provideIcons({heroCheckBadge})]
})
export class FrontendSkillsComponent implements OnInit {
  skills!: ISkills[];
  loading = true;
  errorMessage = '';
  constructor(private skillsApi: SkillsApiService) {}

  ngOnInit(): void {
    this.skillsApi.getAllSkills().subscribe({
      next: (res) => {
        this.skills = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Skills are unavailable right now. Please try again later.';
      },
    });
  }
}
