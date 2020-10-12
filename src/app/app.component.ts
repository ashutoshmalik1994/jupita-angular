import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jupita-frontend';
  headerFooter: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/sign-up" || event.url == "/sign-in" || event.url == "/forgot-password") {
          this.headerFooter = false;
        } else {
          this.headerFooter = true;
        }
      }
    });
  }
}
