import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  imports: [RouterOutlet, MenuModule],
})

export class Layout {

  navItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
    },
    {
      label: 'Component Gallery',
      icon: 'book',
    },
    {
      label: 'Documentation',
      icon: 'file',
    },
  ];

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

