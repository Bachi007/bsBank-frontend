import { Injectable } from '@angular/core';
import { saving } from './saving';
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SavingsbankService {

  constructor() { }

  savingsAcc:saving[]=[
    {
      fullName:"alex",
      userName:"alex",
      password:"pwd123",
      phone:"9876543210",
      email:"alex@gmail.com",
      address:"Hyd",
      accountBalance:50000,
      accountNum:"987654",
      isEdit:false
    },
    {
      fullName:"john",
      userName:"john",
      password:"pwd123",
      phone:"8876543210",
      email:"john@gmail.com",
      address:"Hyd",
      accountBalance:50000,
      accountNum:"987655",
      isEdit:false
    },
    {
      fullName:"jocab",
      userName:"jocab",
      password:"pwd123",
      phone:"7876543210",
      email:"jocab@gmail.com",
      address:"Hyd",
      accountBalance:50000,
      accountNum:"987655",
      isEdit:false
    },
    {
      fullName:"jhony",
      userName:"jhony",
      password:"pwd123",
      phone:"6876543210",
      email:"jhony@gmail.com",
      address:"Hyd",
      accountBalance:50000,
      accountNum:"987655",
      isEdit:false
    },
    {
      fullName:"jackson",
      userName:"jackson",
      password:"pwd123",
      phone:"9976543210",
      email:"jackson@gmail.com",
      address:"Hyd",
      accountBalance:50000,
      accountNum:"987655",
      isEdit:false
    }
  ]

  getAccounts(){
    return of (this.savingsAcc)
  }

  addAccounts(acc:any){
    this.savingsAcc.push(acc)
  }

}
