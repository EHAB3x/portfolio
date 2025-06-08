import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAcademicCap, heroBriefcase } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-qualifications',
  imports: [CommonModule, NgIcon],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
  viewProviders: [provideIcons({
    heroAcademicCap,
    heroBriefcase,
  })]
})
export class QualificationsComponent {
  activeTab: boolean = false;

  constructor() {}

  setActiveTab(value: boolean) {
    this.activeTab = value;
  }
}
