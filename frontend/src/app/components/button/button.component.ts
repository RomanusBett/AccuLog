import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styles: ``
})
export class ButtonComponent {
  content = input<string>();
  btnOutput = output<void>();

  handleClick(){
    this.btnOutput.emit()
  }
}
