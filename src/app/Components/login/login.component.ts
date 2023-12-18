import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router){}


  ngOnInit(): void {
      
  }

  
  loginform =new FormGroup({

    username:new FormControl("",[]),
    password:new FormControl("",[])

  });


  login(){

    debugger;
    if(this.Username.value =='admin'  && this.password.value=='Pass@123'){

       console.log("login sucessfully");      
       
       this.router.navigateByUrl("navbar")

    }
    else{
console.log("login invalid");

    }

  }

  get Username():FormControl{
    return this.loginform.get('username') as FormControl;
  }

  get password():FormControl{
    return this.loginform.get('password') as FormControl;
  }


}
