import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SphereComponent } from '../animation/sphere/sphere.component';
import { GlobeComponent } from '../animation/globe/globe.component';




@NgModule({
  declarations: [
    HomeComponent, 
    SphereComponent,
    GlobeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
