import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../core/models/plan';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = 'http://localhost:5000/api'; 
  private  headers:HttpHeaders;

  constructor(
  	private http: HttpClient
  	) { }

  Auth0 (query: any): Observable<any>{
    this.headers =  new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>(this.Url+"/auth/admin/tokens", query, {headers: this.headers});
  }
  subscriptions (): Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':token});
    return this.http.get<any>(this.Url+"/subscriptions", {headers: this.headers});
  }
  plans (): Observable<Plan[]>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':token});
    return this.http.get<Plan[]>(this.Url+"/plans", {headers: this.headers});
  }
  users (query: any): Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':token});
    return this.http.get<any>(this.Url+"/users", {headers: this.headers});
  }
}
