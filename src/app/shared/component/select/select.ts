import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-select',
  imports: [SelectModule, TagModule],
  templateUrl: './select.html',
})
export class Select {
  countries = [
    { name: 'First Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Second Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Third Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Fourth Sample Long Text That Exceeds Width of the Parent Container' },

  ];

  readonly code = `[pt]="{
      pcOverlay: {
          root: 'w-full!'
      },
      optionLabel:'break-words! whitespace-normal! w-full!'
  }"`;

}
