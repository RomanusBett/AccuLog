import { Component } from '@angular/core';
import { input, output } from '@angular/core';

@Component({
  selector: 'app-app-dropdown',
  imports: [],
  templateUrl: './app-dropdown.component.html',
  styles: ``
})
export class AppDropdownComponent {
  label = input<string>();
  options = input<{label:string, value:string}[]>();
  selectedChange = output<string>();

  isOpen = false;
  selectedLabel = 'Select option';

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  selectOption(option: {label:string, value:string}){
    this.selectedLabel = option.label;
    this.selectedChange.emit(option.value);
    this.isOpen = false;
  }

  closeDropdown(){
    this.isOpen = false;
  }
}
