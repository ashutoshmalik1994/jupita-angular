import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { AuthGuard } from './_helpers';
import { ResendVerificationEmailComponent } from './resend-verification-email/resend-verification-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { TncComponent } from './tnc/tnc.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'docs',
    loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordComponent
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'resend-verification-email/:id',
    component: ResendVerificationEmailComponent
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'termsandconditions/:id',
    component: TncComponent
    // loadChildren: () => import('./tnc/tnc.module').then(m => m.TncModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmation/:id',
    component: ConfirmemailComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
