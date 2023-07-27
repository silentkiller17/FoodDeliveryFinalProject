// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete-menu',
//   templateUrl: './delete-menu.component.html',
//   styleUrls: ['./delete-menu.component.css']
// })
// export class DeleteMenuComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { DeleteMenu } from 'src/app/delete-menu';
import { DeleteMenuService } from 'src/app/service/delete-menu.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css']
})
export class DeleteMenuComponent implements OnInit {

  menu:DeleteMenu=new DeleteMenu();

  constructor(private deleteMenuService:DeleteMenuService) { }

  ngOnInit(): void {
  }

  deleteMenu(){
    console.log(this.menu);
    this.deleteMenuService.delete(this.menu).subscribe(data=>
      {
      alert("Successfully Deleted Menu!!!")
      },error=>alert("Sorry Something is wrong!!!"));
  }

}
