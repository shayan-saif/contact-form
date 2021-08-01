import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ContactForm';
  mode = {
    dark: false,
    label: 'Dark Mode'
  }

  ngOnInit(): void {

    const mode = window.localStorage.getItem("mode");
    if (mode) {
      this.setTheme(mode);
    } else {
      window.localStorage.setItem("mode", "Light Mode")
    }

  }

  setTheme(value: string): void {
    if (value === "Dark Mode") {
      this.mode = {
        dark: true,
        label: "Light Mode"
      }
    } else {
      this.mode = {
        dark: false,
        label: "Dark Mode"
      }
    }
  }

  toggleDark(): void {
    if (this.mode.dark) {
      window.localStorage.setItem("mode", "Light Mode")
      this.setTheme("Light Mode")
    } else {
      window.localStorage.setItem("mode", "Dark Mode")
      this.setTheme("Dark Mode")
    }
  }

}
