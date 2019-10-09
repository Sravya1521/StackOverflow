import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { LoginComponent } from './container/login/login.component';
import { LandingLayoutComponent } from './container/landing-layout/landing-layout.component';
import { SignupComponent } from './container/signup/signup.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', redirectTo: 'layout', pathMatch: 'full' },
      {
        path:'layout',
        component:HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
