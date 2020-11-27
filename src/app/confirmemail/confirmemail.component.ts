import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.scss']
})
export class ConfirmemailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private authService: AuthService, private alertService: AlertService, private route: Router ) { }

  ngOnInit(): void {
    this.router.params
    .subscribe(
      (params) => {
        this.authService.verifyEmail(params)
        .pipe(first())
        .subscribe({
            next: () => {
                // this.alertService.success('Email is verified successfully.', { keepAfterRouteChange: true, autoClose: true });
                this.route.navigate(['/sign-in']);
            },
            error: error => {
                this.alertService.error(error.error.message, {autoClose: true});
            }
        });
      }
    );
  }
}
