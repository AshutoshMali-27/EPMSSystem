import { ServicesService } from 'src/app/Services/services.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/models';

@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit {
  user: any;

  constructor(private ServicesService:ServicesService){}


  ngOnInit(): void {
    this.ServicesService.GetUsers().subscribe((res: any) => { 
      this.user = res;
      console.log(this.user); 
    });


    
  }

  ApprovedUser(){
    
  }


  

}
