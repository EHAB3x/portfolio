import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAcademicCap, heroBriefcase } from '@ng-icons/heroicons/outline';
import { EducationApiService } from '../../core/services/education-api.service';
import { ExperienceApiService } from '../../core/services/experience-api.service';
import { IQualifications } from '../../core/interfaces/iqualifications';
import { QualificationDataComponent } from './components/qualification-data/qualification-data.component';

@Component({
  selector: 'app-qualifications',
  imports: [CommonModule, NgIcon, QualificationDataComponent],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
  viewProviders: [
    provideIcons({
      heroAcademicCap,
      heroBriefcase,
    }),
  ],
})
export class QualificationsComponent implements OnInit {
  activeTab: boolean = false;
  educations!: IQualifications[];
  experiences!: IQualifications[];
  constructor(
    private educationService: EducationApiService,
    private experienceService: ExperienceApiService
  ) {}

  ngOnInit() {
    this.educationService.getAllEducations().subscribe({
      next: (res) => {
        this.educations = res;
      },
    });

    this.experienceService.getAllExperiences().subscribe({
      next: (res) => {
        this.experiences = res;
      },
    });
  }

  setActiveTab(value: boolean) {
    this.activeTab = value;
  }
}
