import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/modules/all-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss']
})
export class DetailQuestionComponent implements OnInit {
  userid:any;
  descriptionArray:[]=[];
  answers:any[] = [];
  comments:any[] = [];
  questioncomment:any;
  answer:any;
  questionid:any;
  questions:any;
  htmlStr: string;
  code:[];
  question$:Observable<any>;
  postAnswer$:Observable<any>;
  postQuestionComment$:Observable<any>;
  postAnswerComment$:Observable<any>;
  @ViewChild('ansCommentInput', {static: false}) ansCommentInput: ElementRef<HTMLInputElement>;

  constructor(private router:Router,private service:AllServicesService) { }

  ngOnInit() {
    this.question$ = this.service.getQuestion();
    this.service.getQuestion().subscribe((data)=> {
      this.questions = data; 
      if(this.questions[0].description !=undefined) {
        let split = this.questions[0].description.split("@");
        this.htmlStr = split[0];
        if(split[1] != undefined) {
          this.code = split[1].split("$");
        }
      }
      
      for (var i=0;i<this.questions[0].answers.length;i++) {
        this.questions[0].answers[i].answer = this.questions[0].answers[i].answer.split("<br>");
      }
      this.answers = this.questions[0].answers; 
      this.questionid = this.questions[0].id;
      this.comments = this.questions[0].comments;
    });
  }

  postAnswer() {
    let finalAnswer = "";
    if(this.service.LoggedIn) {

      if(this.answer == undefined) {
        console.log("answer cannot be empty");
      } else {
        let tempanswer = this.answer.split("\n");
        for(var i=0;i<tempanswer.length;i++) {
          finalAnswer += tempanswer[i]+"<br>";
        }
        let data = {
          answer:finalAnswer,
          comments:[]
        }
        this.answers.push(data);
        let postdata = {
          answers:this.answers
        };
        this.postAnswer$ = this.service.postAnswer(this.questionid,postdata);
        this.service.postAnswer(this.questionid,postdata).subscribe((data)=>{
          console.log(data);
          this.answer = '';
        });
  
      }


    } else {
      alert("Please Login to post an answer");
      this.router.navigateByUrl('landing/login');
    }
    
  }

  postQuestionComment() {
    if(this.service.LoggedIn) {
      if(this.questioncomment == undefined) {
        console.log("answer cannot be empty");
      } else {
        let data = {
          userid:3,
          comment:this.questioncomment
        }
        this.comments.push(data);
        let postdata = {
          comments:this.comments
        };
        this.postQuestionComment$ = this.service.postQuestionComment(this.questionid,postdata);
        this.service.postQuestionComment(this.questionid,postdata).subscribe((data)=>{
          console.log(data);
          this.questioncomment = '';
        });
      }

    } else {
      alert("Please Login to post a comment");
      this.router.navigateByUrl('landing/login');
    }
  }

  postAnswerComment(answer,comment) {
    if(this.service.LoggedIn) {
      if(comment.value == undefined) {
        console.log("answer cannot be empty");
      } else {
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
        this.postAnswerComment$ = this.service.postAnswerComment(this.questionid,postdata);
        this.service.postAnswerComment(this.questionid,postdata).subscribe((data)=> {
          console.log(data);
          comment.value = '';
        });
      }

    } else {
      alert("Please Login to post a comment");
      this.router.navigateByUrl('landing/login');
    }


  }

  // like() {
  //   this.likeCount++;
    
  // }

  // dislike() {
  //   this.dislikeCount++;
  // }

}
