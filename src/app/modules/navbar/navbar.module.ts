import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './container/navbar/navbar.component';
import { NavBarRoutingModule } from './navbar-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingModule } from '../landing/landing.module';
import { MyMaterialModule } from 'src/app/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavBarRoutingModule,
    MatSidenavModule,
    LandingModule,
    DashboardModule,
    MyMaterialModule
  ]
})
export class NavbarModule { }
