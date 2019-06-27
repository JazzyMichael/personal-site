import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo(['profile'])) },
  { path: 'profile', component: ProfileComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AngularFireAuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
