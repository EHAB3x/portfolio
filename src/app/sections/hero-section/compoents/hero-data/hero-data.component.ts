import { Component } from '@angular/core';
import { bootstrapSend } from '@ng-icons/bootstrap-icons';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { faHand } from '@ng-icons/font-awesome/regular';
@Component({
  selector: 'app-hero-data',
  imports: [NgIconComponent],
  templateUrl: './hero-data.component.html',
  styleUrl: './hero-data.component.scss',
  viewProviders: [
    provideIcons({
      faHand,
      bootstrapSend,
    }),
  ],
})
export class HeroDataComponent {}
