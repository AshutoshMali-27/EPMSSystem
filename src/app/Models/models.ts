export interface registerUser {
     id: number;
    firstName: string;
    middlename: string;
    lastname: string;
    panno: string;
    Email:string;
    password: string;
    aadharno: string;
    createdAt:string,
    modifiedAt:string
  }


  export interface loginUser{
    username:string;
    password:string;
  }

  export interface user {
    firstname:string;
    lastname:string;
    email:string;
  }