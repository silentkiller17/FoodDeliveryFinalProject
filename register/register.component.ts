import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisteruserService } from 'src/app/service/registeruser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();

  constructor(private registerService:RegisteruserService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>
      {
      alert("Successfully User is register!!!")
      },error=>alert("Sorry User not register"));
  }
}
