import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './container/navbar/navbar.component';
import { LoginComponent } from '../landing/container/login/login.component';
import { SignupComponent } from '../landing/container/signup/signup.component';
import { AskQuestionComponent } from '../dashboard/container/ask-question/ask-question.component';


export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then( m => m.LandingModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailModule)
      },
      {
        path:'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardModule)
      },
      {
        path:'askquestion',
        component: AskQuestionComponent
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
export class NavBarRoutingModule { }
