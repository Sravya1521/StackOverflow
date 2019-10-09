import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailQuestionComponent } from './container/detail-question/detail-question.component';


export const routes: Routes = [
  {
    path: '',
    component: DetailQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
