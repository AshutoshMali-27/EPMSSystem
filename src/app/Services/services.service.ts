import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { loginUser, registerUser } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl ="https://localhost:7006/api/Values/";
  
  constructor(private http : HttpClient) { }

  RegisterUser(Register:registerUser){
    let url =this.baseUrl + "RegisterUser";
    return this.http.post(url,Register,{responseType:'text'});
  }


  // loginUser(login:loginUser){
  //   let url =this.baseUrl + "loginUser";
  //   return this.http.get(url);
  // }

  // GetUser{user:users}{


  // }

  GetUsers(){
    debugger;
    return this.http.get<any[]>(this.baseUrl+'GetUsers'); 
      }

  updateUserStatus(param:any){
    return this.http.put(this.baseUrl+'updateUserStatus/', param); 
      }


}
