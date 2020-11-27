import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { AlertService } from '../service/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  serverError = false;
  hideMobile = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private route: ActivatedRoute,
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
    if(document.referrer.split("/")[3] == "confirmation"){
      this.hideMobile = true;
    }
    this.form = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required]
    });
  }
  
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.authService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  this.router.navigate(['/user']);
                  this.alertService.success('Login successful.', { keepAfterRouteChange: true, autoClose: true });
              },
              error: error => {
                this.serverError = true;
                this.loading = false;
              }
          });
  }

}
