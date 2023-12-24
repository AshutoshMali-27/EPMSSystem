import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

const routes: Routes = [

  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'',
    component:NavbarComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
