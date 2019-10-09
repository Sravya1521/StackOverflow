import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailQuestionComponent } from './container/detail-question/detail-question.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MyMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [DetailQuestionComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MyMaterialModule
  ]
})
export class DetailModule { }
