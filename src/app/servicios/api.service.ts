import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../core/models/plan';
import { Subscripcion } from '../core/models/subscription';
import { Usuario } from '../core/models/usuario';
import { Flower } from '../core/models/flower';
import { StorageService, Session } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = 'http://localhost:5000/api'; 
  // private Url = '/api';
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
  users (): Observable<Usuario[]>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Usuario[]>(this.Url+"/users", {headers: this.headers});
  }
  subscription(id:string): Observable<Subscripcion>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Subscripcion>(this.Url+"/subscription/"+id,{headers: this.headers});
  }
  plans (): Observable<Plan[]>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Plan[]>(this.Url+"/plans", {headers: this.headers});
  }
  plan(id:string):Observable<Plan>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Plan>(this.Url+"/plan/"+id, {headers: this.headers});
  }
  addPlan(p:Plan):Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.post<any>(this.Url+"/plans", p,{headers: this.headers});
  }
  editPlan(p:Plan):Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.put<any>(this.Url+"/plan/"+p._id, p,{headers: this.headers});
  }
  flowers():Observable<Flower[]>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Flower[]>(this.Url+"/flowers", {headers: this.headers});
  }
  flower(id:string):Observable<Flower>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.get<Flower>(this.Url+"/flower/"+id, {headers: this.headers});
  }
  addFlower(f:Flower):Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.post<any>(this.Url+"/flowers", f, {headers: this.headers});
  }
  editFlower(f:Flower):Observable<any>{
    let token=(localStorage.getItem('token'));
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':this.sesion.token});
    return this.http.put<any>(this.Url+"/flower/"+f._id, f,{headers: this.headers});
  }
}
