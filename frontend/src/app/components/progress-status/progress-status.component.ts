import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  imports: [],
  templateUrl: './progress-status.component.html',
  styles: ``
})
export class ProgressStatusComponent {
  status = input<string>();
}
