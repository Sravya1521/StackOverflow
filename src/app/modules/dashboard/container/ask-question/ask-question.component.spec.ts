import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionComponent } from './ask-question.component';
import { MyMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';
import { Observable, of } from 'rxjs';
import { DashboardModule } from '../../dashboard.module';
import { MatChipInputEvent } from '@angular/material';

const mockTag = [
  {
    name:"java",
    id:1
  }];
describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  class fakeService {
    getTags(): Observable<any> {
      return of([mockTag]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionComponent ],
      imports:[
        MyMaterialModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        AppModule
      ],
      providers: [
        {
          provide: AllServicesService,
          useClass: fakeService
        },{provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }}
      ]
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get all tags from the server', () => {
    fixture.detectChanges();
    component.tags$.subscribe((data)=> {
      expect(data[0][0].name).toEqual(mockTag[0].name);
    });
  });

});
