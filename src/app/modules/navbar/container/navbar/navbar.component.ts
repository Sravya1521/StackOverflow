import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  flag:Boolean = false;
  constructor(private service:AllServicesService, private router:Router) {  
   }

  ngOnInit() {
    this.service.isLoggedIn.subscribe(x => {
      if(x === 'success') {
        this.service.LoggedIn = true;
        this.flag = this.service.LoggedIn;
      }
    });
  }

  logout() {
    this.service.LoggedIn = false;
    this.flag = this.service.LoggedIn;
    this.router.navigate(['']);
  }

  home() {
    this.router.navigate(['']);
  }

}
