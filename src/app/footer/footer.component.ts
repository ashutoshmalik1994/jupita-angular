import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        if (event.url == "/sign-up" || event.url == "/sign-in" || event.url == "/forgot-password") {
          this.footer = false;
        } else {
          this.footer = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
