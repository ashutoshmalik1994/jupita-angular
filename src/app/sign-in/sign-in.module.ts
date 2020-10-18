import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ParticleBackgroundModule } from '../animation/partical-background/particle-background.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ParticleBackgroundModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
