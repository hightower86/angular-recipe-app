import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() pathSelected = new EventEmitter<string>();

  onSelect(path: string) {
    this.pathSelected.emit(path);
  }
}
