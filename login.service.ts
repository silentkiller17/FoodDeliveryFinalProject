import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../component/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:9999/login"
  constructor(private httpClient:HttpClient) { }

  loginUser(user:Login):Observable<object>{
    console.log(user);

      return this.httpClient.post(`${this.baseUrl}`,user);
    
  }
}
