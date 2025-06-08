import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidMoon, faSolidSun } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule, NgIcon],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  viewProviders: [
    provideIcons({
      faSolidMoon,
      faSolidSun,
    }),
  ],
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: boolean = false;
  constructor() {}

  changeTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      this.currentTheme = false;
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      this.currentTheme = true;
      localStorage.setItem('theme', 'dark');
    }
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      this.currentTheme = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.currentTheme = false;
    }
  }
}
