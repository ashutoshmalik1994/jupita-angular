import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { ResendVerificationEmailComponent } from './resend-verification-email/resend-verification-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GlobeComponent } from './animation/globe/globe.component';
import { TncComponent } from './tnc/tnc.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmemailComponent,
    ResendVerificationEmailComponent,
    ResetPasswordComponent,
    GlobeComponent,
    TncComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GlobeComponent]
})
export class AppModule { }
