import { Component, input,  } from '@angular/core';

@Component({
  selector: 'app-f-input',
  templateUrl: './f-input.component.html',
  providers: [],
})

export class FInputComponent{
  label = input<string>();
  placeholder = input<string>();
  type = input<string>();
  fCName = input<string>();
}
