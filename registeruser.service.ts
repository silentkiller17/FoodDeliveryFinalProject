import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../component/user';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  baseUrl="http://localhost:9999/user"
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
