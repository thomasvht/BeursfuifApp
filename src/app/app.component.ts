import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private router: Router) {

  }

  isActive(url: string) {
    return this.router.isActive(url, true) ? 'page' : null;
  }
}
