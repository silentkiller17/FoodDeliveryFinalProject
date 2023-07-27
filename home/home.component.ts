import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public menuList : any ;
  public filterCategory : any ;
  searchKey:string = "";
  constructor(private home:HomeService, private cartService : CartService) { }

  ngOnInit(): void {
    this.home.getMenu()
    .subscribe((res: any)=>{
      this.menuList = res;
      this.filterCategory = res;
      this.menuList.
       forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
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




