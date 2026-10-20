import { Component, OnInit } from '@angular/core';
import { IServices } from '../../core/interfaces/iservices';
import { ServicesApiService } from '../../core/services/services-api.service';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowRight, bootstrapX } from '@ng-icons/bootstrap-icons';
import { featherCheckCircle } from '@ng-icons/feather-icons';
import { faBrandReact, faBrandAngular } from '@ng-icons/font-awesome/brands';
import { faSolidBrush, faSolidDesktop } from '@ng-icons/font-awesome/solid';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, NgIcon, LoaderComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapArrowRight,
      bootstrapX,
      featherCheckCircle,
      faBrandReact,
      faBrandAngular,
      faSolidBrush,
      faSolidDesktop,
    }),
  ],
})
export class ServicesSectionComponent implements OnInit {
  toggle: number = 0;
  activeService: IServices = {} as IServices;
  services!: IServices[];
  loading = true;
  errorMessage = '';

  constructor(private serviceApi: ServicesApiService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe({
      next: (res) => {
        this.services = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          'Services are unavailable right now. Please try again later.';
      },
    });
  }

  setToggle(index: number) {
    this.toggle = index;
    if (this.toggle !== -1) {
      this.activeService = this.services.filter((ser) => ser.id === index)[0];
      console.log(this.toggle);
    }
  }
}
