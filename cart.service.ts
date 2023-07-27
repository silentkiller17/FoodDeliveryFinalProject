import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getMenu() {
    throw new Error('Method not implemented.');
  }
  public cartItemList : any =[]
  public menuList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getMenus(){
    return this.menuList.asObservable();
  }

  setMenu(menu : any){
    this.cartItemList.push(...menu);
    this.menuList.next(menu);
  }
  addtoCart(menu : any){
    this.cartItemList.push(menu);
    this.menuList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(menu: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(menu.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.menuList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.menuList.next(this.cartItemList);
  }
}
