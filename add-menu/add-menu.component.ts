// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-add-menu',
// //   templateUrl: './add-menu.component.html',
// //   styleUrls: ['./add-menu.component.css']
// // })
// // export class AddMenuComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }
// import { Component, OnInit } from '@angular/core';
// import { AddMenuService } from 'src/app/service/add-menu.service';
// import { AddMenu } from '../add-menu';
// @Component({
//     selector: 'app-add-menu',
//     templateUrl: './add-menu.component.html',
//     styleUrls: ['./add-menu.component.css']
//   })
// export class AddMenuComponent implements OnInit {

//   product:AddMenu=new AddMenu();

//   constructor(private addMenuService:AddMenuService) { }

//   ngOnInit(): void {
//   }

//   add(){
//     console.log(this.menu);
//     this.addMenuService.add(this.menu).subscribe(data=>
//       {
//       alert("Successfully Added Menu!!!")
//       },error=>alert("Sorry Something is wrong!!!"));
//   }
//   menu(menu: any) {
//     throw new Error('Method not implemented.');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { AddMenuService } from 'src/app/service/add-menu.service';
import { AddMenu } from '../add-menu';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menu: AddMenu = new AddMenu();

  constructor(private addMenuService: AddMenuService) { }
  

  ngOnInit(): void {
  }

  add() {
    console.log(this.menu);
    this.addMenuService.add(this.menu).subscribe(
      data => {
        alert("Successfully Added Menu!!!");
      },
      error => {
        alert("Sorry, something went wrong!!!");
      }
    );
  }
}

