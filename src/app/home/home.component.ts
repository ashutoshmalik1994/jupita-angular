import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isBrowsers: boolean;
  constructor() {
  }

  timerExicution = 0;

  ngOnInit(): void {
  }

}
