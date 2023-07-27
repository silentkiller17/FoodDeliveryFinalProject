import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getMenus() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private httpClient:HttpClient) { }
  getMenu(){
    return this.httpClient.get<any>("http://localhost:9999/menu")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
