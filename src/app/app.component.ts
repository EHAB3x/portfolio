import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { HeaderComponent } from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent],
  viewProviders: [provideIcons({ heroUsers })]
})
export class AppComponent {
  title = 'portfolio';
}
