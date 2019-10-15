import { Injectable,Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService implements CanActivate {

  public LoggedIn:Boolean = false;
  public useremail:string;
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  public questionTitle:string;
  constructor(private http:HttpClient,private router:Router) { }

  registerUserDetails(email, password, displayName):Observable<any>{
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'my-auth-token'
    })
  };
    const putData = { 
      email:email,
      password:password,
      displayName: displayName,
    };
    return this.http.post<any>(`http://localhost:3000/users`,putData,httpOptions)
  }

  getUserDetails(email):Observable<any>{
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<any>(`http://localhost:3000/users?email=${email}`,{ headers: Headers });
  }

  getAllUser():Observable<any>{
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<any>(`http://localhost:3000/users`,{ headers: Headers });
  }

  getQuestions():Observable<any> {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<any>(`http://localhost:3000/questions`,{ headers: Headers }); 
  }

  getTags():Observable<any> {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<any>(`http://localhost:3000/tags`,{ headers: Headers }); 
  }

  getQuestion():Observable<any> {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<any>(`http://localhost:3000/questions?title=${this.questionTitle}`,{ headers: Headers }); 
  }

  postQuestion(postdata):Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.post<any>(`http://localhost:3000/questions`,postdata,httpOptions); 
  }

  postAnswer(id,postdata):Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch<any>(`http://localhost:3000/questions/${id}`,postdata,httpOptions); 
  }

  postQuestionComment(id,postdata):Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch<any>(`http://localhost:3000/questions/${id}`,postdata,httpOptions); 
  }

  postAnswerComment(id,postdata):Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch<any>(`http://localhost:3000/questions/${id}`,postdata,httpOptions);
  }

  canActivate():boolean  {
    
    if((this.LoggedIn == false && this.useremail == undefined)) {
      this.router.navigateByUrl('landing/login');
      return false;
    } else {
      return true;
    }  
    
  }

}

/* Defines the product entity */
export class User {
  email: string;
  password: string;
  displayName: string;
}