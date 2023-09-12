import { Component } from '@angular/core';
import { SavingsbankService } from '../services/savingsbank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private saving:SavingsbankService){}
    savingAcc:any;
  savingsflag=false;
  rdflag=false;
  fdflag=false;
  userflag=false;
  loanflag=false;
  savings(){
    this.savingsflag=true;
    this.rdflag=false;
  this.fdflag=false;
  this.userflag=false;
  this.loanflag=false;
  }
  fd(){
    this.fdflag=true;
    this.savingsflag=false;
    this.rdflag=false;
  this.userflag=false;
  this.loanflag=false;
  }
  rd(){
    this.fdflag=false;
    this.savingsflag=false;
    this.rdflag=true;
  this.userflag=false;
  this.loanflag=false;
  }
  loan(){
    this.fdflag=false;
    this.savingsflag=false;
    this.rdflag=false;
  this.userflag=false;
  this.loanflag=true;
  }
  ngOnInit(){
    this.saving.getAccounts().subscribe((res)=>{
        this.savingAcc=res;
    })
  }
}
