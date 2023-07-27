import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './component/cart/cart.component';
import { MenusComponent } from './component/menus/menus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SiteLayoutComponent } from './component/site-layout/site-layout.component';
import { FooterComponent } from './component/site-layout/footer/footer.component';
import { HeaderComponent } from './component/site-layout/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AddMenuComponent } from './component/add-menu/add-menu.component';
import { HomeComponent } from './component/home/home.component';
import { DeleteMenuComponent } from './component/delete-menu/delete-menu.component';
import { CustomerComponent } from './component/customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    MenusComponent,
    FilterPipe,
    SiteLayoutComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddMenuComponent,
    HomeComponent,
    DeleteMenuComponent,
    AddMenuComponent,
    MenusComponent,
    CustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
