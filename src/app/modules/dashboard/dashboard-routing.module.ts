import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackoverflowComponent } from './container/stackoverflow/stackoverflow.component';
import { DashboardLayoutComponent } from './container/dashboard-layout/dashboard-layout.component';
import { AskQuestionComponent } from './container/ask-question/ask-question.component';
import { AllServicesService } from '../all-services.service';


export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'stackoverflow', pathMatch: 'full' },
      {
        path:'stackoverflow',
        component: StackoverflowComponent
      },
      {
        path:'askquestion',
        component: AskQuestionComponent, canActivate:[AllServicesService]
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
