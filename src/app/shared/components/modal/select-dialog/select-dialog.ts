import { Component, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';

interface TextSample {
    name: string;
}

@Component({
    selector: 'app-select-dialog',
    standalone: true,
    imports: [DialogModule, SelectModule, TagModule],
    templateUrl: './select-dialog.html',
})
export class SelectDialogComponent {
    visible = model<boolean>(false);

    textSample = input<TextSample[]>([]); 
    code = input<string>('');
}