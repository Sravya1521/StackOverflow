import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuestionComponent } from './detail-question.component';
import { MyMaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { Observable, of } from 'rxjs';
import { AllServicesService } from 'src/app/modules/all-services.service';
import { Router } from '@angular/router';

const mockquestionData = 
  {
    "id": 1,
    "userid": 2,
    "likesCount": 2,
    "dislikesCount": 4,
    "title": "Please how do I resolve fileNotFoundException in Java using intellij",
    "description": "My project on intellij does not run my project anymore, keep throwing some compilation errors, please what can I do to resolve this I have tried Rebuilding, Building and also Invalidate Cache/Restarted but I didn't work I also checked out this link below but it didn't work for me",
    "comments": [
      {
        "userid": 3,
        "comment": "My advice: read the error message, and try to understand what it says."
      },
      {
        "userid": 2,
        "comment": "They are not part of the public API; they may be changed, removed or whatever without notice. Some of them may be experimental or just not production-grade."
      },
      {
        "userid": 3,
        "comment": "mnmnmnm"
      },
      {
        "userid": 3,
        "comment": "erwtrryhuiuyiuy"
      },
      {
        "userid": 3,
        "comment": "pioiuoi"
      },
      {
        "userid": 3,
        "comment": "mhvbjm"
      },
      {
        "userid": 3,
        "comment": "gfcf"
      },
      {
        "userid": 3,
        "comment": "hgh\n"
      },
      {
        "userid": 3,
        "comment": "54e5"
      },
      {
        "userid": 3,
        "comment": "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
      },
      {
        "userid": 3,
        "comment": "jhb\njnk"
      }
    ],
    "answers": [
      {
        "answer": "You need to change the import of your Class: ",
        "comments": [
          {
            "userid": 1,
            "comment": "Do I need to download any external package for this to work? If yes, which? "
          },
          {
            "userid": 2,
            "comment": "jhjhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh "
          },
          {
            "userid": 3,
            "comment": "gdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd "
          },
          {
            "userid": 3,
            "comment": "kajal"
          },
          {
            "userid": 3,
            "comment": "jvjn"
          }
        ]
      },
      {
        "answer": "Use Java 8's never-too-late-to-join-in-the-fun class ",
        "comments": [
          {
            "userid": 1,
            "comment": "Although a trivial comment, notice that if you use that you're not compatible with older versions of Java, which are (at least at this point in time) probably far more prevalent. "
          },
          {
            "userid": 3,
            "comment": "ngvnv"
          },
          {
            "userid": 3,
            "comment": "sravya"
          },
          {
            "userid": 3,
            "comment": "vnbvnb"
          },
          {
            "userid": 3,
            "comment": "hbj"
          }
        ]
      },
      {
        "answer": "jhgjhgjhgjhbjhmgbjmh",
        "comments": [
          {
            "userid": 3,
            "comment": "nhbmnbmnb"
          },
          {
            "userid": 3,
            "comment": "ytrytrytr"
          }
        ]
      },
      {
        "answer": "hiuhihihliuh",
        "comments": [
          {
            "userid": 3,
            "comment": "nbvjn"
          },
          {
            "userid": 3,
            "comment": "mhnbmnb"
          },
          {
            "userid": 3,
            "comment": "lafoot"
          }
        ]
      },
      {
        "answer": "sravya",
        "comments": [
          {
            "userid": 3,
            "comment": "jhklkjk"
          }
        ]
      },
      {
        "answer": "gfh",
        "comments": [
          {
            "userid": 3,
            "comment": "mnbm"
          }
        ]
      },
      {
        "answer": "hbmm",
        "comments": [
          {
            "userid": 3,
            "comment": "kjh"
          }
        ]
      },
      {
        "answer": "mhb\n",
        "comments": [
          {
            "userid": 3,
            "comment": "tet5r"
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "java"
      },
      {
        "name": "java-intellij"
      },
      {
        "name": "project-setup"
      }
    ]
  };

  let postdata = {
    "answers": [
      {
        "answer": "You need to change the import of your Class: ",
        "comments": [
          {
            "userid": 1,
            "comment": "Do I need to download any external package for this to work? If yes, which? "
          },
          {
            "userid": 2,
            "comment": "jhjhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh "
          },
          {
            "userid": 3,
            "comment": "gdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd "
          },
          {
            "userid": 3,
            "comment": "kajal"
          },
          {
            "userid": 3,
            "comment": "jvjn"
          }
        ]
      },
      {
        "answer": "Use Java 8's never-too-late-to-join-in-the-fun class ",
        "comments": [
          {
            "userid": 1,
            "comment": "Although a trivial comment, notice that if you use that you're not compatible with older versions of Java, which are (at least at this point in time) probably far more prevalent. "
          },
          {
            "userid": 3,
            "comment": "ngvnv"
          },
          {
            "userid": 3,
            "comment": "sravya"
          },
          {
            "userid": 3,
            "comment": "vnbvnb"
          },
          {
            "userid": 3,
            "comment": "hbj"
          }
        ]
      },
      {
        "answer": "jhgjhgjhgjhbjhmgbjmh",
        "comments": [
          {
            "userid": 3,
            "comment": "nhbmnbmnb"
          },
          {
            "userid": 3,
            "comment": "ytrytrytr"
          }
        ]
      },
      {
        "answer": "hiuhihihliuh",
        "comments": [
          {
            "userid": 3,
            "comment": "nbvjn"
          },
          {
            "userid": 3,
            "comment": "mhnbmnb"
          },
          {
            "userid": 3,
            "comment": "lafoot"
          }
        ]
      },
      {
        "answer": "sravya",
        "comments": [
          {
            "userid": 3,
            "comment": "jhklkjk"
          }
        ]
      },
      {
        "answer": "gfh",
        "comments": [
          {
            "userid": 3,
            "comment": "mnbm"
          }
        ]
      },
      {
        "answer": "hbmm",
        "comments": [
          {
            "userid": 3,
            "comment": "kjh"
          }
        ]
      },
      {
        "answer": "mhb\n",
        "comments": [
          {
            "userid": 3,
            "comment": "tet5r"
          }
        ]
      }
    ]    
  }

  

  class fakeService {
    public LoggedIn:Boolean;
    public questionTitle:string;
    getQuestion(): Observable<any> {
      return of([mockquestionData]);
    }
    postAnswer(id,postdata):Observable<any> {
      return of([mockquestionData]);
    }
    postQuestionComment(id,postdata):Observable<any> {
      return of([mockquestionData]);
    }
    postAnswerComment(id,postdata):Observable<any> {
      return of([mockquestionData]);
    }
  }


describe('DetailQuestionComponent', () => {
  let component: DetailQuestionComponent;
  let fixture: ComponentFixture<DetailQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQuestionComponent ],
      imports:[
        MyMaterialModule,
        RouterTestingModule,
        HttpClientTestingModule,
        AppModule
      ],
      providers:[
      {
        provide: AllServicesService,
        useClass: fakeService
      },{provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }}
    ]
    })
    .compileComponents();
  }));

  let router: Router;
  let service:AllServicesService;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQuestionComponent);
    router = TestBed.get(Router);
    service = TestBed.get(AllServicesService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get particular question  details', () => {
    let temp = new fakeService();
    temp.questionTitle = "Please how do I resolve fileNotFoundException in Java using intellij";
    fixture.detectChanges();
    component.question$.subscribe((data)=> {
      expect(data[0].title).toEqual(mockquestionData.title); 
    });
  });

  it('testing postAnswer function is called or not', () => {
    var spy = spyOn(component,'postAnswer').and.callThrough();
    component.postAnswer();
    expect(spy).toHaveBeenCalled();
  });

  it('testing posting an answer', () => {
    service.LoggedIn = true;
    component.answer = "game";
    component.questionid = mockquestionData.id;
    component.answers = mockquestionData.answers;
    component.postAnswer();
    let title = mockquestionData.title;
    component.postAnswer$.subscribe((data)=> {
      expect(data[0].title).toEqual(title);
    });
  });

  it('if user tries to post answer navigate to login if not logged in', () => {
    component.postAnswer();
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  });
  

  it('testing postQuestionComment function is called or not', () => {
    var spy = spyOn(component,'postQuestionComment').and.callThrough();
    component.postQuestionComment();
    expect(spy).toHaveBeenCalled();
  });

  it('if user tries to post question comment navigate to login if not logged in', () => {
    component.postQuestionComment();
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  });

  it('testing posting a question comment', () => {
    service.LoggedIn = true;
    component.questioncomment = "sravya";
    component.questionid = mockquestionData.id;
    component.comments = mockquestionData.comments;
    component.postQuestionComment();
    let title = mockquestionData.title;
    component.postQuestionComment$.subscribe((data)=> {
      expect(data[0].title).toEqual(title);
    });
  });

  it('testing postAnswerComment function is called or not', () => {
    var spy = spyOn(component,'postAnswerComment').and.callThrough();
    component.postAnswerComment(null,null);
    expect(spy).toHaveBeenCalled();
  });

  it('if user tries to post answer comment navigate to login if not logged in', () => {
    component.postAnswerComment(null,null);
    expect(router.navigateByUrl).toHaveBeenCalledWith('landing/login');
  });

  it('testing posting a answer comment', () => {
    service.LoggedIn = true;
    let comment = {
      value:"stack"
    }
    component.questionid = mockquestionData.id;
    component.answers = mockquestionData.answers;
    component.postAnswerComment('jhgjhgjhgjhbjhmgbjmh',comment);
    let title = mockquestionData.title;
    component.postAnswerComment$.subscribe((data)=> {
      expect(data[0].title).toEqual(title);
    });
  });

});
