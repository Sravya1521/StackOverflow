import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AllServicesService } from './all-services.service';

describe('AllServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[
      AllServicesService
    ]
  }));

  const mockquestionData = [
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
    }];

    const mockUserData =     {
      "email": "tom@gmail.com",
      "password": "Password@12",
      "displayName": "gameeee",
      "id":1
    };

it('should be created', () => {
    const service: AllServicesService = TestBed.get(AllServicesService);
    expect(service).toBeTruthy();
  });


  it('testing registration', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

    service.registerUserDetails('tom@gmail.com','Password@12','gameeee').subscribe(data => {
      expect(mockUserData[0].email).toBe("tom@gmail.com");
    });
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('POST');

    // Then we set the fake data to be returned by the mock
    req.flush(mockUserData);

  }));

it('get User details', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

    service.getUserDetails('tom@gmail.com').subscribe(data => {
      expect((Object.keys(data).length)).toBe(4);
    });
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/users?email=tom@gmail.com');
    expect(req.request.method).toEqual('GET');

    // Then we set the fake data to be returned by the mock
    req.flush(mockUserData);

  }));


it('http get all user details', 
    inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{
    
      const mockData = [
      {
        "email": "kudani@virtua.com",
        "password": "Passwoerrcdf12",
        "displayName": "kudani",
        "lastName": "madineni",
        "id": 1
      }];
    
      service.getAllUser().subscribe(mockData => {
     
      expect(mockData[0].email).toBe("kudani@virtua.com");

    });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/users');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);

  }));

it('http get all question details', 
  inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{
    service.getQuestions().subscribe(mockquestionData => {
   
    expect(mockquestionData[0].title).toBe("Please how do I resolve fileNotFoundException in Java using intellij");

  });
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/questions');
    expect(req.request.method).toEqual('GET');

    // Then we set the fake data to be returned by the mock
    req.flush(mockquestionData);

}));

it('http get all tags', 
inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

  const mockData = [
  {
    "name": "java",
    "id": 1
  }];

  service.getTags().subscribe(mockData => {
 
  expect(mockData[0].name).toBe("java");

});
  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/tags');
  expect(req.request.method).toEqual('GET');

  // Then we set the fake data to be returned by the mock
  req.flush(mockData);

}));

it('http get question detail', 
inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

    service.questionTitle = "Please how do I resolve fileNotFoundException in Java using intellij";

  service.getQuestion().subscribe(mockquestionData => {
 
    expect(mockquestionData[0].title).toBe("Please how do I resolve fileNotFoundException in Java using intellij");

});
  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/questions?title=Please how do I resolve fileNotFoundException in Java using intellij');
  expect(req.request.method).toEqual('GET');

  // Then we set the fake data to be returned by the mock
  req.flush(mockquestionData);

}));


it('http post question', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

  service.postQuestion(mockquestionData).subscribe(mockquestionData => {
    expect(mockquestionData[0].title).toBe("Please how do I resolve fileNotFoundException in Java using intellij");
  });
  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/questions');
  expect(req.request.method).toEqual('POST');

  // Then we set the fake data to be returned by the mock
  req.flush(mockquestionData);

}));


it('http post answer', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{
  const mockAnswerData =     [{
    "answer":"You need to change the import of your Class:",
    "comments":[]
  }];

  service.postAnswer(1,mockAnswerData).subscribe(mockData => {
    expect(mockAnswerData[0].answer).toBe("You need to change the import of your Class:");
  });
  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/questions/1');
  expect(req.request.method).toEqual('PATCH');

  // Then we set the fake data to be returned by the mock
  req.flush(mockAnswerData);

}));

it('http add commment to the question', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{
  const mockCommentData =  [{
    "userid": 3,
    "comment": "My advice: read the error message, and try to understand what it says."
  }];

  service.postQuestionComment(1,mockCommentData).subscribe(mockData => {
    expect(mockCommentData[0].comment).toBe("My advice: read the error message, and try to understand what it says.");
  });
  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/questions/1');
  expect(req.request.method).toEqual('PATCH');

  // Then we set the fake data to be returned by the mock
  req.flush(mockCommentData);

}));

it('http add commment to the answer', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{

  const mockAnswerData =     [{
    "answer":"You need to change the import of your Class:",
    "comments":[{
      "userid": 3,
      "comment": "My advice: read the error message, and try to understand what it says."
    }]
  }];

  service.postAnswerComment(1,mockAnswerData).subscribe(mockData => {
    expect(mockAnswerData[0].comments[0].comment).toBe("My advice: read the error message, and try to understand what it says.");
  });

  // We set the expectations for the HttpClient mock
  const req = httpMock.expectOne('http://localhost:3000/questions/1');
  expect(req.request.method).toEqual('PATCH');

  // Then we set the fake data to be returned by the mock
  req.flush(mockAnswerData);

}));

});
