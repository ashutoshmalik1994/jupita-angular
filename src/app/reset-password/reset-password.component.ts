import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor (
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
        passwordGroup: this.formBuilder.group({
          password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\\d$@$!%?&]{8,}$')]],
          confirmPassword: ['']
        }, {validator: this.checkPasswords })
    });
  }
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }     
  }
  get pg() { return this.form.controls.passwordGroup as FormGroup;; }

  onSubmit() {
      this.submitted = true;
      
      this.alertService.clear();
      
      if (this.form.invalid) {
          return;
      }
      const resetData = {
        password: this.form.value.passwordGroup.password,
        token: this.router.url.split('/')[2]
      }
      this.authService.resetPassword(resetData)
      .pipe(first())
      .subscribe({
          next: () => {
              this.alertService.success('Password reset successfully.', { keepAfterRouteChange: true, autoClose: true });
              this.router.navigate(['/sign-in']);
          },
          error: error => {
              this.alertService.error(error.error.message, {autoClose: true});
              this.loading = false;
          }
      });
  }

}
