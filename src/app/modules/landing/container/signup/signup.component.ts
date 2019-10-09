import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AllServicesService } from 'src/app/modules/all-services.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm : FormGroup;
  exist:Boolean = false;
  constructor(private fb: FormBuilder, private router:Router,private service:AllServicesService) { }

  ngOnInit() {
    this.userForm= this.fb.group({
      displayName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onRegitration() {
      this.exist = false;
      this.service.getAllUser().subscribe((data:any) => {
        data.forEach(element => {
            if(element.email == this.userForm.get('email').value) {
              this.exist = true;
            }     
        });
        if(this.exist) {
          alert("You have already registered. Please Login");    
          this.router.navigateByUrl('landing/login');
        } else {
          
          this.service.registerUserDetails(
            this.userForm.get('email').value,
            this.userForm.get('password').value,
            this.userForm.get('displayName').value).subscribe((data) => 
            {
              console.log(data);
              alert("Registration Successfull");
              this.router.navigateByUrl('landing/login');
            }, error => {
              //console.log(error, 'inside ......');
              this.handleError(error); // handling error
             });

        }
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

  redirectLogin() {
    this.router.navigateByUrl('landing/login');
  }

}
