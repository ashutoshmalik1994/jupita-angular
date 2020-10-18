import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logout: Boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const user = this.authService.userValue;
    if(user.expires_in != 0){
      this.logout = true;
    }else{
      this.logout = false;
    }
  }

  logoutUser(){
    this.authService.logout();
  }

}
