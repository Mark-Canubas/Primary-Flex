import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  imports: [RouterOutlet, PanelMenuModule],
})

export class Layout {
  private readonly router = inject(Router);

  navItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      path: '',
      command: () => this.navigateTo('')
    },
    {
      label: 'Component Gallery',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Form Actions',
          icon: 'pi pi-th-large',
          command: () => this.navigateTo('gallery')
        }
      ]
    },
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

