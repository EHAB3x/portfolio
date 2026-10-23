import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAcademicCap, heroBriefcase } from '@ng-icons/heroicons/outline';
import { EducationApiService } from '../../core/services/education-api.service';
import { ExperienceApiService } from '../../core/services/experience-api.service';
import { IQualifications } from '../../core/interfaces/iqualifications';
import { QualificationDataComponent } from './components/qualification-data/qualification-data.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-qualifications',
  imports: [CommonModule, NgIcon, QualificationDataComponent, LoaderComponent],
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
  educationLoading = true;
  experienceLoading = true;
  errorMessage = '';
  constructor(
    private educationService: EducationApiService,
    private experienceService: ExperienceApiService
  ) {}

  ngOnInit() {
    this.educationService.getAllEducations().subscribe({
      next: (res) => {
        this.educations = res;
        this.educationLoading = false;
      },
      error: () => {
        this.educationLoading = false;
        this.errorMessage = 'Qualifications are unavailable right now. Please try again later.';
      },
    });

    this.experienceService.getAllExperiences().subscribe({
      next: (res) => {
        this.experiences = res;
        this.experienceLoading = false;
      },
      error: () => {
        this.experienceLoading = false;
        this.errorMessage = 'Qualifications are unavailable right now. Please try again later.';
      },
    });
  }

  setActiveTab(value: boolean) {
    this.activeTab = value;
  }

  get loading(): boolean {
    return this.educationLoading || this.experienceLoading;
  }
}
