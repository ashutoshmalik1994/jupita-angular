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
        const urlNotAllowed = event.url.split('/')[1];
        if (urlNotAllowed == "sign-up" || urlNotAllowed == "sign-in" || urlNotAllowed == "forgot-password" || urlNotAllowed == "confirmation") {
          this.headerFooter = false;
        } else {
          this.headerFooter = true;
        }
      }
    });
  }
}
