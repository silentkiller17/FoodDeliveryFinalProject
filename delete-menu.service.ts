
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddMenu } from '../component/add-menu';
import { DeleteMenu } from '../delete-menu';

@Injectable({
  providedIn: 'root'
})
export class DeleteMenuService {

  baseUrl="http://localhost:9999/menu"
  constructor(private httpClient:HttpClient) { }

  delete(menuId:DeleteMenu):Observable<object>{
    console.log(menuId);
    return this.httpClient.delete(`${this.baseUrl}`);

  }
 
}
