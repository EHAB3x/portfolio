import { Component } from '@angular/core';
import { InfoComponent } from './components/info/info.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidDownload } from '@ng-icons/font-awesome/solid';
@Component({
  selector: 'app-about-section',
  imports: [InfoComponent, NgIconComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  viewProviders: [
    provideIcons({
      faSolidDownload,
    }),
  ],
})
export class AboutSectionComponent {}
