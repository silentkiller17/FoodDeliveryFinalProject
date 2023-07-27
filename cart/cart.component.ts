// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   public menus : any = [];
//   public grandTotal !: number;
//   constructor(private cartService : CartService) { }

//   ngOnInit(): void {
//     this.cartService.getMenus()
//     .subscribe((res: any)=>{
//       this.menus = res;
//       this.grandTotal = this.cartService.getTotalPrice();
//     })
//   }
//   removeItem(item: any){
//     this.cartService.removeCartItem(item);
//   }
//   emptycart(){
//     this.cartService.removeAllCart();
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
// import { Observable } from 'rxjs'; // Import the Observable type
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public menus: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getMenus().subscribe((res: any) => {
      this.menus = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}


