import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './component/add-menu/add-menu.component';
import { CartComponent } from './component/cart/cart.component';
import { DeleteMenuComponent } from './component/delete-menu/delete-menu.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MenusComponent } from './component/menus/menus.component';
import { RegisterComponent } from './component/register/register.component';



const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'menus', component: MenusComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'add-menu', component:AddMenuComponent},
  {path:'home', component:HomeComponent},
 {path:'delete-menu', component:DeleteMenuComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


