import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { MyMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { of, Observable, throwError } from 'rxjs';
import { AllServicesService } from 'src/app/modules/all-services.service';

let router: Router;
let PageSvc: AllServicesService;

const fakeAllUsersData =     [{
  "email": "game@gmail.com",
  "password": "Password@13",
  "displayName": "sravya",
  "id": 1
}];

class fakeService {
  getAllUser(): Observable<any> {
    return of([fakeAllUsersData]);
  }
  registerUserDetails(email,password,displayName): Observable<any> {
    return of([fakeAllUsersData]);
  }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
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
        },
        {provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }}
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    PageSvc = TestBed.get(AllServicesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create regDetailsForm', () => {
    component.ngOnInit()
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should check onRegistration Called or not', () => {
    //spyOn(component,'onRegistration').and.callThrough();
    var spy = spyOn(component,'onRegitration').and.callThrough();
    component.onRegitration();
    expect(spy).toHaveBeenCalled();
  });

  it('testing Email', () => {
  let errors = {};
  let email = component.userForm.controls['email'];
  expect(email.valid).toBeFalsy();
  // Email field is required
  errors = email.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set email to something
  email.setValue("test");
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();

  // Set email to something correct
  email.setValue("test@example.com");
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();
  }); 

  it('should check onRegistration post Call', () => {
    component.email = fakeAllUsersData[0].email;
    component.password = fakeAllUsersData[0].password;
    component.displayName = fakeAllUsersData[0].displayName;
    component.onRegitration();
    component.user$.subscribe((data) => {
      //console.log(data);
      expect(data[0]).toEqual(fakeAllUsersData);
    });
  });


  it('testing error handling', () => {
  // arrange
  fixture.detectChanges();
  // set form model
  component.email = fakeAllUsersData[0].email;
  component.password = fakeAllUsersData[0].password;
  spyOn(PageSvc,'registerUserDetails').and.returnValue(throwError({status: 404}));
  var spy = spyOn(component,'handleError').and.callThrough();
  // act
  component.onRegitration();
  fixture.detectChanges();
  // assert
  expect(spy).toHaveBeenCalled();

  });

});
