import { Component, signal } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from "primeng/button";
import { SelectDialogComponent } from "../../shared/component/select-dialog/select-dialog";

@Component({
  selector: 'app-select',
  imports: [SelectModule, TagModule, DialogModule, ButtonDirective, SelectDialogComponent],
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

  readonly code = `[pt]="{
      pcOverlay: {
          root: 'w-full!'
      },
      optionLabel:'break-words! whitespace-normal! w-full!'
  }"`;

}
