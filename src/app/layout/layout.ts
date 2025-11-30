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
      items: [
        {
          label: 'Form',
          items: [
            {
              label: 'Select',
              command: () => this.navigateTo('select')
            }
          ]
        }
      ]
    },
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

