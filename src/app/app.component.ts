import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ContactForm';
  darkMode = false;
  toggleLabel: string = 'Dark mode';

  toggleDark(): void {
    this.darkMode = !this.darkMode;
    if (this.toggleLabel === 'Dark mode') {
      this.toggleLabel = 'Light mode';
    } else {
      this.toggleLabel = 'Dark mode';
    }
  }
}
