import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // onSetLink(state: string) {
  //   if (state === 'recipes') {
  //     this.router.navigate(['recipes']);
  //   }
  //   if (state === 'shoppingList') {
  //     this.router.navigate(['shopping-list']);
  //   }
  // }
}
