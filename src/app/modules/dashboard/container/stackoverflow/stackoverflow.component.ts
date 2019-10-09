import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent implements OnInit {
  questions:any;
  constructor(private router:Router,private service:AllServicesService) { 

  }

  ngOnInit() {
    this.service.getQuestions().subscribe((data)=> {
      this.questions = data;
    });

  }

  askQuestion() {

    if(this.service.LoggedIn) {
      console.log("Ask Question Clicked");
      this.router.navigate(['/askquestion']);
    } else {
     // this.loggedin = false;
      alert("Please login to ask a question");
      this.router.navigate(['/login']);
    }

    //this.router.navigate(['/askquestion']);
  }

  questionDetail(title:string) {
    this.service.questionTitle = title;
    this.router.navigate(['/detail']);
  }

}
