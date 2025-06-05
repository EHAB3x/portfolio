import { Component } from '@angular/core';
import { ISocialLinks } from '../../../../core/interfaces/social-links';
import { socialLinks } from '../../../../core/constants/socialLinks';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherLinkedin,
  featherGithub,
  featherTwitter,
} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-hero-social-links',
  imports: [CommonModule, NgIcon],
  templateUrl: './hero-social-links.component.html',
  styleUrl: './hero-social-links.component.scss',
  viewProviders: [
    provideIcons({
      featherLinkedin,
      featherGithub,
      featherTwitter,
    }),
  ],
})
export class HeroSocialLinksComponent {
  socialLinksArr: ISocialLinks[] = socialLinks;
}
