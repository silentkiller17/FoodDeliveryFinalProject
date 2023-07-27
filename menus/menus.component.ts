// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-menus',
//   templateUrl: './menus.component.html',
//   styleUrls: ['./menus.component.css']
// })
// export class MenusComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  public menuList : any ;
  public filterCategory : any ;
  searchKey:string = "";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getMenu()
    .subscribe((res: any)=>{
      this.menuList = res;
      this.filterCategory = res;
      this.menuList.
       forEach((a:any) => {
          if(a.category ==="Pizza" || a.category ==="Burger"|| a.category ==="Biryani"|| a.category ==="South Indian"){
            a.category ="food"
         }
        
        Object.assign(a,{quantity:1,total:a.price});
       });
      console.log(this.menuList)
    });

       this.cartService.search.subscribe((val:any)=>{
       this.searchKey = val;
     })
    }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.menuList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
