import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { OverviewComponent } from './overview/overview.component';
import { AuthGuard } from '../_helpers';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    {
      path: '', component: OverviewComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
