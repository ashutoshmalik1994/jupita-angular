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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadScript('../assets/js/particle-background.js');
    this.form = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  get f() { return this.form.controls; }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

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
              this.alertService.error(error.error.message, {autoClose: true});
              this.loading = false;
          }
      });
  }

}
