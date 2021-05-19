import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewExpenseComponent,
    EditExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
