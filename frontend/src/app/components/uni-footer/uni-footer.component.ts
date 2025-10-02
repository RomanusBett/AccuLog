import { Component } from '@angular/core';

@Component({
  selector: 'app-uni-footer',
  imports: [],
  templateUrl: './uni-footer.component.html',
  styles: ``
})
export class UniFooterComponent {
  year = new Date().getFullYear()
}
