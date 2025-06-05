import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { INavLink } from '../../core/interfaces/INavLink';

@Component({
  selector: 'app-header',
  imports: [NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu : boolean = false;
  navLinks: INavLink[] = [
    {
      svg: 'estate',
      name: 'Home',
      id: 'home',
    },
    {
      svg: 'user',
      name: 'About',
      id: 'about',
    },
    {
      svg: 'file-alt',
      name: 'Skills',
      id: 'skills',
    },
    {
      svg: 'briefcase-alt',
      name: 'Services',
      id: 'services',
    },
    {
      svg: 'scenery',
      name: 'Projects',
      id: 'projects',
    },
    {
      svg: 'message',
      name: 'Contact',
      id: 'contact',
    },
  ];
}
