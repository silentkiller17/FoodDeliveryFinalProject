import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser:Login=new Login();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginuser);
    this.loginService.loginUser(this.loginuser).subscribe(data=>
      {
      alert("Login Successfully!!!")
      },error=>alert("Sorry User not register"));
  }

 

}


