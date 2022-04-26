import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://reqres.in/api/';
  private headers = {

    headers: {

      'Content-Type': 'application/json'

    }

  }
  
  constructor(private http: HttpClient) { }

  login(email:string,password:string){
    let userInfo = {
      email:email,
      password:password
    }
    return this.http.post<any>(this.url+'login',userInfo,this.headers);
  }

  register(email:string,password:string){
    let userInfo = {
      email:email,
      password:password
    }
    return this.http.post<any>(this.url+'register',userInfo,this.headers);
  }

  storeToken(token:any){
    localStorage.setItem('token',token);
  }
}
