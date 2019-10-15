import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { AllServicesService } from 'src/app/modules/all-services.service';
import { Observable, of, throwError } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

const fakeUserData =     [{
  "email": "game@gmail.com",
  "password": "Password@13",
  "displayName": "sravya",
  "id": 1
}];

class fakeService {
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  getUserDetails(email): Observable<any> {
    return of([fakeUserData]);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        MyMaterialModule,
        ReactiveFormsModule,
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

  let router: Router;
  let PageSvc: AllServicesService;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    PageSvc = TestBed.get(AllServicesService);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onredirectSignUp navigate to SignUp',() => {
    component.redirectSignUp();  
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/signup');
  });

  it('Get data through service ', () => {
    fixture.detectChanges();
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    component.login();
    component.user$.subscribe((data) => {
      //console.log(data);
      expect(data[0]).toEqual(fakeUserData);
    });
    //expect(router.navigateByUrl).toHaveBeenCalledWith('dashboard/stackoverflow');
  });

  it('Form should display error message saying EmailId/ Password is not entered.', async() => {
    // arrange
    fixture.detectChanges();
    // set form modal
    component.email = undefined;
    component.password = undefined;
    fixture.detectChanges();
    // act
    component.login();
    fixture.detectChanges();
    // assert
    expect(component.email).toBeFalsy();
    expect(component.password).toBeFalsy();
  });


  it('Form should throw new exception', async() => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    spyOn(PageSvc,'getUserDetails').and.returnValue(throwError({status: 404}));
    var spy = spyOn(component,'handleError').and.callThrough();
    // act
    component.login();
    fixture.detectChanges();
    // assert
    expect(spy).toHaveBeenCalled();
  });

});
