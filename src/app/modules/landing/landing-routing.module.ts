import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { LoginComponent } from './container/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   { path: '', redirectTo: 'landing', pathMatch: 'full' },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
