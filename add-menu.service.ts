
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddMenu } from '../component/add-menu';

@Injectable({
  providedIn: 'root'
})
export class AddMenuService {

  baseUrl="http://localhost:9999/menu"
  constructor(private httpClient:HttpClient) { }

  add(menu:AddMenu):Observable<object>{
    console.log(menu);
    return this.httpClient.post(`${this.baseUrl}`,menu);

  }
}