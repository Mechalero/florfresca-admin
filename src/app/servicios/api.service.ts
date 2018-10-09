import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../core/models/plan';
import { Subscripcion } from '../core/models/subscription';
import { StorageService, Session } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = 'http://localhost:5000/api'; 
  private  headers:HttpHeaders;
  private sesion:Session;

  constructor(
  	private http: HttpClient,
    private storageService: StorageService
  	) {
    this.sesion = this.storageService.getCurrentSession();
  }

  Auth0 (query: any): Observable<any>{
    this.headers =  new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>(this.Url+"/auth/admin/tokens", query, {headers: this.headers});
  }
  subscriptions (): Observable<Subscripcion[]>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Subscripcion[]>(this.Url+"/subscriptions",{headers: this.headers});
  }
  plans (): Observable<Plan[]>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Plan[]>(this.Url+"/plans", {headers: this.headers});
  }
  users (query: any): Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<any>(this.Url+"/users", {headers: this.headers});
  }
}
