import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { WavesComponent } from '../animation/waves/waves.component';
import { NgParticlesModule } from 'ng-particles';




@NgModule({
  declarations: [ProductComponent,
    WavesComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgParticlesModule

  ]
})
export class ProductModule { }
