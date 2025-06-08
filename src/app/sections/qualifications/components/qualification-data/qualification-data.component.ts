import { Component, Input } from '@angular/core';
import { IQualifications } from '../../../../core/interfaces/iqualifications';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherCalendar } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-qualification-data',
  imports: [CommonModule, NgIcon],
  templateUrl: './qualification-data.component.html',
  styleUrl: './qualification-data.component.scss',
  viewProviders: [
    provideIcons({
      featherCalendar,
    }),
  ],
})
export class QualificationDataComponent {
  @Input() qualifications!: IQualifications[];

  constructor() {}
}
