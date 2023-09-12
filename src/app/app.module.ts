import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginnregisterComponent } from './loginnregister/loginnregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar"
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsAccComponent } from './savings-acc/savings-acc.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { ReccuringDepositComponent } from './reccuring-deposit/reccuring-deposit.component';
import { LoansComponent } from './loans/loans.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginnregisterComponent,
    DashboardComponent,
    SavingsAccComponent,
    FixedDepositComponent,
    ReccuringDepositComponent,
    LoansComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
