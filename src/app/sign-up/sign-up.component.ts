import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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
        email: ['', Validators.compose([Validators.required, Validators.email])],
        username: ['', Validators.required],
        passwordGroup: this.formBuilder.group({
          password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%^?&*()_+])[A-Za-z\\d$@#$!%^?&*()_+]{8,}$')]],
          confirmPassword: ['']
        }, {validator: this.checkPasswords })
    });
  }
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }     
  }
  
  get f() { return this.form.controls; }
  get pg() { return this.form.controls.passwordGroup as FormGroup;; }

  onSubmit() {
      this.submitted = true;
      
      this.alertService.clear();
      
      if (this.form.invalid) {
          return;
      }

      this.authService.register(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // this.alertService.success('Registration successful, please verify your email address to login.', { keepAfterRouteChange: true, autoClose: true });
              this.router.navigate(['/resend-verification-email/'+this.form.value.email]);
          },
          error: error => {
              this.alertService.error(error.error.message, {autoClose: true});
              this.loading = false;
          }
      });
  }

}
