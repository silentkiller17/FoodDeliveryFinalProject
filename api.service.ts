import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
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
