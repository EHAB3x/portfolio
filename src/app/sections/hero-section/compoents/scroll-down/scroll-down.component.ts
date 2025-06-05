import { Component } from '@angular/core';
import { bootstrapArrowDown } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-scroll-down',
  imports: [NgIcon],
  templateUrl: './scroll-down.component.html',
  styleUrl: './scroll-down.component.scss',
  viewProviders: [provideIcons({ bootstrapArrowDown })],
})
export class ScrollDownComponent {}
