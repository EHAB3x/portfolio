import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckBadge } from '@ng-icons/heroicons/outline';

import { SkillsApiService } from '../../../../core/services/skills-api.service';
import { ISkills } from '../../../../core/interfaces/iskills';
import { LoaderComponent } from '../../../../shared/loader/loader.component';

@Component({
  selector: 'app-frontend-skills',
  standalone: true,
  imports: [CommonModule, NgIcon, LoaderComponent],
  templateUrl: './frontend-skills.component.html',
  styleUrl: './frontend-skills.component.scss',
  viewProviders: [provideIcons({ heroCheckBadge })],
})
export class FrontendSkillsComponent implements OnInit {
  skills: ISkills[] = [];
  loading = true;
  errorMessage = '';

  constructor(private skillsApi: SkillsApiService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  private loadSkills(): void {
    this.loading = true;
    this.errorMessage = '';

    this.skillsApi.getAllSkills().subscribe({
      next: (res) => {
        this.skills = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          'Skills are unavailable right now. Please try again later.';
      },
    });
  }

  retry(): void {
    this.loadSkills();
  }

  trackBySkill(index: number, skill: ISkills): number | string {
    return skill.id;
  }
}
