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
  private readonly router = inject(Router);

  navItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
    },
    {
      label: 'Component Gallery',
      icon: 'book',
    },
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

