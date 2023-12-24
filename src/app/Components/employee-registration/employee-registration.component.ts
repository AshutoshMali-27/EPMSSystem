import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl } from '@angular/forms';

import { ServicesService } from 'src/app/Services/services.service';
import { registerUser } from 'src/app/Models/models';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  message ='';
  constructor(private ServicesService:ServicesService){}



  ngOnInit(): void {
      
  }
  Empregisterform =new FormGroup({

    
    id:new FormControl("",[]),
    firstName:new FormControl("",[]),
    middlename:new FormControl("",[]),
    lastname:new FormControl("",[]),
    panno:new FormControl("",[]),
    aadharno:new FormControl("",[]),
    Email :new FormControl("",[]),
    password:new FormControl("",[]),
    conpassword:new FormControl("",[])

  });


  Register(){
    debugger;
    let Register: registerUser ={

      id:this.id.value,
      firstName: this.firstName.value,
      middlename:this.middlename.value ,
      lastname:this.lastname.value,
      panno:this.panno.value,
      aadharno:this.aadharno.value,
      Email:this.Email.value,
      password:this.Password.value,
      createdAt:'',
      modifiedAt:'',
    
    };
 

    this.ServicesService.RegisterUser(Register).subscribe((res:any) =>{
      debugger;
      console.log(res);

      if(res == "true"){
        this.message ="Register Successfully";
      }
      else{
        this.message="Registration Failed";
      }
 
      
    })

  }

  get firstName():FormControl{
    return this.Empregisterform.get('firstName') as FormControl;
  }

  get middlename():FormControl{
    return this.Empregisterform.get('middlename') as FormControl;
  }
  get lastname():FormControl{
    return this.Empregisterform.get('lastname') as FormControl;
  }
  get panno():FormControl{
    return this.Empregisterform.get('panno') as FormControl;
  }
  get aadharno():FormControl{
    return this.Empregisterform.get('aadharno') as FormControl;
  }

  get Email():FormControl{
    return this.Empregisterform.get('Email') as FormControl;
  }
  get Password():FormControl{
    return this.Empregisterform.get('password') as FormControl;
  }
  
  get RPWD(): FormControl {
    return this.Empregisterform.get('conpassword') as FormControl;

  }
  get id(): FormControl {
    return this.Empregisterform.get('id') as FormControl;

  }
}
