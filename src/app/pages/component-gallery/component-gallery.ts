import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-component-gallery',
  imports: [ButtonModule],
  templateUrl: './component-gallery.html',
})
export class ComponentGallery {
  filterButtons: string[] = [
    'All',
    'Form',
  ];
}
