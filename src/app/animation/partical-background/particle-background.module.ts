// Modules
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';

// Components
import { ParticalBackgroundComponent } from './partical-background.component';



@NgModule({
  declarations: [
    ParticalBackgroundComponent,
  ],

  imports: [
    NgParticlesModule
  ],

  exports: [
    ParticalBackgroundComponent
  ],

  providers: [ ],

})

export class ParticleBackgroundModule { }