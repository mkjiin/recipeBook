import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('nav') navBarStateChanged = new EventEmitter<string>();

  onSetNavBarState(state: string) {
    this.navBarStateChanged.emit(state);
  }
}
