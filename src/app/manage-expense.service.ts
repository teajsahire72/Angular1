import { Injectable } from '@angular/core';
import {Expense} from '../app/Expense';

@Injectable({
  providedIn: 'root'
})
export class ManageExpenseService {
expenses = [
  new Expense("Tour",new Date(),"Travel","ihi",5000),
  new Expense("Grocery",new Date(),"Food","ihi",1200),
];
  constructor() {
   }

   setExpense(expense){
    this.expenses.push(expense);
    console.log(this.expenses);
   }

   getExpenses(){
     return this.expenses;
   }
}
