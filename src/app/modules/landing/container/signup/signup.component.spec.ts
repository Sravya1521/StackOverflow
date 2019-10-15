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

const fakeALlUsersData =     [{
  "email": "game@gmail.com",
  "password": "Password@13",
  "displayName": "sravya",
  "id": 1
}];

class fakeService {
  getAllUser(): Observable<any> {
    return of([fakeALlUsersData]);
  }
  registerUserDetails(email,password,displayName): Observable<any> {
    return of([fakeALlUsersData]);
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should create regDetailsForm', () => {
    component.ngOnInit()
    expect(component.userForm.valid).toBeFalsy();

  });

  fit('should check onRegistration Called or not', () => {
    //spyOn(component,'onRegistration').and.callThrough();
    var spy = spyOn(component,'onRegitration').and.callThrough();
    component.onRegitration();
    expect(spy).toHaveBeenCalled();
  //  expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  });

  fit('testing Email', () => {
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

  // fit('should check onRegistration post Call', () => {
  //   component.userForm.patchValue({email:fakeALlUsersData[0].email});
  //   component.userForm.patchValue({password:fakeALlUsersData[0].password});
  //   component.userForm.patchValue({displayName:fakeALlUsersData[0].displayName});
  //   component.onRegitration();
  //   //expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  // });

fit('should check the post call data', () => {
  spyOn(component,'handleError').and.callThrough();
  const usergetdetailsMockedcall = spyOn(fakeService,'getAllUser').and.returnValue(throwError({status: 'some error'}));
  component.onRegitration();
  expect(component.handleError).toHaveBeenCalled();
});

});
