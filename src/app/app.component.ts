import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipebook';
  navBarState: string = 'Recipes';

  onNavStatusAdded(event: string) {
    this.navBarState = event;
  }
}
