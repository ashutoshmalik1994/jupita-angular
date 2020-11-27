import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-verification-email',
  templateUrl: './resend-verification-email.component.html',
  styleUrls: ['./resend-verification-email.component.scss']
})
export class ResendVerificationEmailComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = "../assets/js/particle-background.js";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;
      
      this.alertService.clear();
      if (this.form.invalid) {
          return;
      }
      const emailData = {
        newEmail: this.form.value.email,
        actualEmail: this.router.url.split('/')[2]
      }
      console.log(emailData)
      this.authService.resendEmailVerification(emailData)
      .pipe(first())
      .subscribe({
          next: () => {
              this.alertService.success('Email verification link send successfully, please verify your email address to login.', { keepAfterRouteChange: true, autoClose: true });
              this.router.navigate(['/resend-verification-email/'+emailData.newEmail]);
          },
          error: error => {
              this.alertService.error(error.error.message, {autoClose: true});
              this.loading = false;
          }
      });
  }

}
