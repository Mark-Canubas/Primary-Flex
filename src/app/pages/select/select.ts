import { Component, signal } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from "primeng/button";
import { SelectDialogComponent } from "../../shared/components/modal/select-dialog/select-dialog";
import { StatsCardComponent } from '../../features/dashboard/components/stats-card/stats-card';

@Component({
  selector: 'app-select',
  imports: [SelectModule, TagModule, DialogModule, SelectDialogComponent, StatsCardComponent],
  templateUrl: './select.html',
})
export class Select {

  visible = signal(false);

  textSample = [
    { name: 'First Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Second Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Third Sample Long Text That Exceeds Width of the Parent Container' },
    { name: 'Fourth Sample Long Text That Exceeds Width of the Parent Container' },

  ];

readonly code = `<p-select 
  [options]="textSample()" 
  optionLabel="name" 
  placeholder="Select Option" 
  class="w-full"
  [pt]="{
      pcOverlay: {
        root: 'w-full!'
      },
      optionLabel:'break-words! whitespace-normal! w-full!'
  }">
  </p-select>`;

}
