import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient) { }
 /* public questionTitle:string;
  getQuestions() {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/questions`,{ headers: Headers }); 
  }

  getTags() {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/tags`,{ headers: Headers }); 
  }

  getQuestion() {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/questions?title=${this.questionTitle}`,{ headers: Headers }); 
  }

  postQuestion(postdata) {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.post(`http://localhost:3000/questions`,postdata,httpOptions); 
  }

  postAnswer(id,postdata) {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch(`http://localhost:3000/questions/${id}`,postdata,httpOptions); 
  }

  postQuestionComment(id,postdata) {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch(`http://localhost:3000/questions/${id}`,postdata,httpOptions); 
  }

  postAnswerComment(id,postdata) {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
    return this.http.patch(`http://localhost:3000/questions/${id}`,postdata,httpOptions);
  }*/

}
