import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
export class ServicesSectionComponent implements OnInit, OnDestroy {
  toggle: number = 0;
  activeService: IServices = {} as IServices;
  services!: IServices[];
  loading = true;
  errorMessage = '';

  constructor(
    private serviceApi: ServicesApiService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

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

  setToggle(index: number): void {
    this.toggle = index;
    if (index === -1) {
      this.unlockPageScroll();
      return;
    }

    const service = this.services?.find((item) => item.id === index);
    if (!service) {
      this.unlockPageScroll();
      return;
    }

    this.activeService = service;
    this.lockPageScroll();
  }

  ngOnDestroy(): void {
    this.unlockPageScroll();
  }

  private lockPageScroll(): void {
    this.renderer.addClass(this.document.body, 'modal-open');
  }

  private unlockPageScroll(): void {
    this.renderer.removeClass(this.document.body, 'modal-open');
  }
}
