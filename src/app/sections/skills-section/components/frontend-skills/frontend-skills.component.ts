import { Component, OnInit } from '@angular/core';
import { SkillsApiService } from '../../../../core/services/skills-api.service';
import { ISkills } from '../../../../core/interfaces/iskills';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckBadge } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-frontend-skills',
  imports: [CommonModule, NgIcon],
  templateUrl: './frontend-skills.component.html',
  styleUrl: './frontend-skills.component.scss',
  viewProviders: [provideIcons({heroCheckBadge})]
})
export class FrontendSkillsComponent implements OnInit {
  skills!: ISkills[];
  constructor(private skillsApi: SkillsApiService) {}

  ngOnInit(): void {
    this.skillsApi.getAllSkills().subscribe({
      next: (res) => {
        this.skills = res;
      },
    });
  }
}
