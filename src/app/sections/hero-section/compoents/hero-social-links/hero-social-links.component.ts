import { Component } from '@angular/core';
import { ISocialLinks } from '../../../../core/interfaces/social-links';
import { socialLinks } from '../../../../core/constants/socialLinks';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapTwitterX,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-hero-social-links',
  imports: [CommonModule, NgIcon],
  templateUrl: './hero-social-links.component.html',
  styleUrl: './hero-social-links.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapTwitterX,
    }),
  ],
})
export class HeroSocialLinksComponent {
  socialLinksArr: ISocialLinks[] = socialLinks;
}
