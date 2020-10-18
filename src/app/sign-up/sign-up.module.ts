import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ParticleBackgroundModule } from '../animation/partical-background/particle-background.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ParticleBackgroundModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
