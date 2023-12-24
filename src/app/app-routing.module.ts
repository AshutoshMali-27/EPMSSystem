import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { EmployeeRegistrationComponent } from './Components/employee-registration/employee-registration.component';
import { UserApprovalComponent } from './Components/user-approval/user-approval.component';

const routes: Routes = [

  // {
  //   path:'',
  //   component:LoginComponent
  // },

  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'Empregister',
    component:EmployeeRegistrationComponent
  },
  {
    path:'EmpApproval',
    component:UserApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
