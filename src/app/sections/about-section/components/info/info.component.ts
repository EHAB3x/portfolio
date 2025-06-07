import { Component } from '@angular/core';
import { IAboutConstants } from '../../../../core/interfaces/iabout-constants';
import { aboutConstants } from '../../../../core/constants/aboutConstants';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { featherAward, featherBriefcase, featherHeadphones } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-info',
  imports: [NgIcon, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  viewProviders: [provideIcons({
    featherAward,
    featherBriefcase,
    featherHeadphones
  })]
})
export class InfoComponent {
  aboutConstantsArray: IAboutConstants[] = aboutConstants;
}
