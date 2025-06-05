import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent],
})
export class AppComponent {
  title = 'portfolio';
}
