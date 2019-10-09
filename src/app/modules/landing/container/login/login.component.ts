import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/modules/all-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
    /** Storing http get response */
    users: any;
    loginForm : FormGroup;
     /** display error message */
    errorMessage: string;

  constructor(private fb: FormBuilder, private router:Router,private service:AllServicesService) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  redirectSignUp() {
    this.router.navigateByUrl('landing/signup');
  }

  login() {
    this.service.getUserDetails(this.loginForm.get('email').value).subscribe((data) =>{
      this.users = data;
      if(this.users.length == 0) {

        this.errorMessage = 'Invalid Email';

      } else {

        if((this.loginForm.get('password').value == this.users[0].password) )  {
          this.service.isLoggedIn.emit('success');
          this.router.navigateByUrl('dashboard/stackoverflow');
        } else {
          this.errorMessage = 'Password is incorrect. Please try again.';
        }

      }
        


    }, error => {
         //console.log(error, 'inside ......');
        alert('Email id or Password is incorrect. Please try again.');
         this.handleError(error); // handling error
        });
      
  }

  public handleError(errorResponse: HttpErrorResponse) {
    // client side or server error
    if (errorResponse.error instanceof ErrorEvent) {
      // console.error("client side error",errorResponse.error.message);
      alert('client side error,please try again');
    } else {
       console.error("Server side error",errorResponse);
      alert('server side error,please try again');
    }
    return throwError('there is problem with service');
  }

}
