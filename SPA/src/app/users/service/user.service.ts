import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://reqres.in/api/";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    let newUrl = this.url + "users?page=2";
    return this.http.get<any>(newUrl);
  }

  getUser(userId:String):Observable<any>{
    let newUrl = this.url + "users/"+userId;
    return this.http.get<any>(newUrl);
  }

  //addUser(user:string, ):Observable<any>
  
}
