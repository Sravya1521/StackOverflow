import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackoverflowComponent } from './container/stackoverflow/stackoverflow.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MyMaterialModule } from 'src/app/material.module';
import { AskQuestionComponent } from './container/ask-question/ask-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StackoverflowComponent, AskQuestionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyMaterialModule
  ]
})
export class DashboardModule { }
