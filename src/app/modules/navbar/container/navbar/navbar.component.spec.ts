import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar.component';
import { MyMaterialModule } from 'src/app/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { AllServicesService } from 'src/app/modules/all-services.service';
import { LoginComponent } from 'src/app/modules/landing/container/login/login.component';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[
        MyMaterialModule, HttpClientTestingModule, RouterTestingModule, MatSidenavModule, AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('jnhb',() => {
  //   let temp = new LoginComponent(null,null,null);
  //   temp.isLoggedIn.subscribe(g => {
  //     if(g === 'success') {
  //       expect(component.flag).toEqual(true);
  //     }
  //  });
  //  //expect(component.flag).toEqual(false);
  // });

  it('logout method is called',() => {
    spyOn(component,'logout').and.callThrough();
    component.logout();
    expect(component.logout).toHaveBeenCalled();
  });

  it('home method is called',() => {
    spyOn(component,'home').and.callThrough();
    component.home();
    expect(component.home).toHaveBeenCalled();
  });

});
