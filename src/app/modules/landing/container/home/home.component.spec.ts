import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }}
      ]
    })
    .compileComponents();
  }));

  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onlogin navigate to login',() => {
    component.login();  
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  });

  it('onsignup navigate to signup',() => {
    component.signUp();  
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/signup');
  });
});
