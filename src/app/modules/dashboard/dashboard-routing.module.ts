import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackoverflowComponent } from './container/stackoverflow/stackoverflow.component';


export const routes: Routes = [
  {
    path: '',
    component: StackoverflowComponent,
    // children: [
    //   { path: '', redirectTo: 'stackoverflow', pathMatch: 'full' },
    //   {
    //     path:'stackoverflow',
    //     component: StackoverflowComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
