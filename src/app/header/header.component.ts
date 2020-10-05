import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        if (event.url == "/sign-up" || event.url == "/sign-in" || event.url == "/forgot-password") {
          this.header = false;
        } else {
          this.header = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
