import { Component } from '@angular/core';
import { InfoComponent } from "./components/info/info.component";

@Component({
  selector: 'app-about-section',
  imports: [InfoComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
