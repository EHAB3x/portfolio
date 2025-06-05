import { Component } from '@angular/core';
import { ISocialLinks } from '../../core/interfaces/social-links';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapTwitterX } from '@ng-icons/bootstrap-icons';
import { socialLinks } from '../../core/constants/socialLinks';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders:[provideIcons({
    bootstrapLinkedin,
    bootstrapGithub,
    bootstrapTwitterX
  })]
})
export class FooterComponent {
  footerSocialLinks : ISocialLinks[] = socialLinks;
}
