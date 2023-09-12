import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnregisterComponent } from './loginnregister/loginnregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsAccComponent } from './savings-acc/savings-acc.component';
import { ReccuringDepositComponent } from './reccuring-deposit/reccuring-deposit.component';
import { LoansComponent } from './loans/loans.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginnregisterComponent},
  {path:'admin',component:DashboardComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'savings',component:SavingsAccComponent},
    {path:'reccuring',component:ReccuringDepositComponent},
    {path:'loans',component:LoansComponent},
    {path:'fixed',component:FixedDepositComponent},
    {path:'users',component:UsersComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
