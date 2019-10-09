import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss']
})
export class DetailQuestionComponent implements OnInit {
  answers:any[] = [];
  comments:any[] = [];
  questioncomment:any;
  answer:any;
  questionid:any;
  questions:any;

  @ViewChild('ansCommentInput', {static: false}) ansCommentInput: ElementRef<HTMLInputElement>;
  constructor(private router:Router,private service:AllServicesService) { }

  ngOnInit() {
    this.service.getQuestion().subscribe((data)=> {
      this.questions = data; 
      this.answers = this.questions[0].answers; 
      this.questionid = this.questions[0].id;
      this.comments = this.questions[0].comments;
    });
  }

  postAnswer() {
    if(this.service.LoggedIn) {
      let data = {
        answer:this.answer,
        comments:[]
      }
      this.answers.push(data);
      let postdata = {
        answers:this.answers
      };
      this.service.postAnswer(this.questionid,postdata).subscribe((data)=>{
        console.log(data);
        this.answer = '';
      });
    } else {
      alert("Please Login to post an answer");
      this.router.navigateByUrl('landing/login');
    }
  }

  postQuestionComment() {
    if(this.service.LoggedIn) {
      let data = {
        userid:3,
        comment:this.questioncomment
      }
      this.comments.push(data);
      let postdata = {
        comments:this.comments
      };
      this.service.postQuestionComment(this.questionid,postdata).subscribe((data)=>{
        console.log(data);
        this.questioncomment = '';
      });
    } else {
      alert("Please Login to post a comment");
      this.router.navigateByUrl('landing/login');
    }
  }

  postAnswerComment(answer,comment) {
    if(this.service.LoggedIn) {
      let data = {
        userid:3,
        comment:comment.value
      }
      this.answers.forEach((element)=> {
        if(element.answer == answer) {
          let index = this.answers.findIndex(record => record.answer == element.answer);
          this.answers[index].comments.push(data);
        }
      });
  
      let postdata = {
        answers:this.answers
      };
      
      this.service.postAnswerComment(this.questionid,postdata).subscribe((data)=> {
        console.log(data);
        comment.value = '';
      });
    } else {
      alert("Please Login to post a comment");
      this.router.navigateByUrl('landing/login');
    }


  }

}
