import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  serverError = false;

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
      console.log(this.form.value.email)
      this.authService.sendForgotPasswordLink(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              this.alertService.success('Thank you. Please check your email.', { keepAfterRouteChange: true, autoClose: true });
          },
          error: error => {
            this.serverError = true;
            this.loading = false;
          }
      });
  }

}
