import { Component, Input, Output, EventEmitter, model, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-stats-card',
    templateUrl: './stats-card.html',
    standalone: true,
    imports: [ButtonModule],
})
export class StatsCardComponent {
    code = input<string>('');

    emitVisible = output<boolean>();

    setVisible(value: boolean) {
        this.emitVisible.emit(value);
    }
}
