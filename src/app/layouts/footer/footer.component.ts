import { Component } from '@angular/core';
import { ISocialLinks } from '../../core/interfaces/social-links';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherLinkedin,
  featherGithub,
  featherTwitter,
} from '@ng-icons/feather-icons';
import { socialLinks } from '../../core/constants/socialLinks';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [
    provideIcons({
      featherLinkedin,
      featherGithub,
      featherTwitter,
    }),
  ],
})
export class FooterComponent {
  footerSocialLinks: ISocialLinks[] = socialLinks;
}
