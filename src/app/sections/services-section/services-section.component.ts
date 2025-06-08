import { Component, OnInit } from '@angular/core';
import { IServices } from '../../core/interfaces/iservices';
import { ServicesApiService } from '../../core/services/services-api.service';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowRight, bootstrapX } from '@ng-icons/bootstrap-icons';
import { featherCheckCircle } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, NgIcon],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapArrowRight,
      bootstrapX,
      featherCheckCircle,
    }),
  ],
})
export class ServicesSectionComponent implements OnInit {
  toggle: number = 0;
  services!: IServices[];

  constructor(private serviceApi: ServicesApiService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe({
      next: (res) => {
        this.services = res;
      },
    });
  }

  setToggle(index: number) {
    this.toggle = index;
  }
}
