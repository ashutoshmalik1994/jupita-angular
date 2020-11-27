import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.scss']
})
export class TncComponent implements OnInit {
  urlPath = '';
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.urlPath = event.url.split('/')[2];
      }
    });
  }

  ngOnInit(): void {
    console.log(this.urlPath)
  }

  termsConditions(parameter){
    this.urlPath = parameter;
    this.location.replaceState("/termsandconditions/"+parameter);
  }

}
