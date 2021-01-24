import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [UserComponent, SidebarComponent, OverviewComponent, UserHeaderComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
