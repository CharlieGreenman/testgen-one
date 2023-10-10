import { Component } from '@angular/core';

@Component({
  selector: 'testgen-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-one';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
