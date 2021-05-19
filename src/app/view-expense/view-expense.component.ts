import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from '../Expense';
import { ManageExpenseService } from '../manage-expense.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
}) 
export class ViewExpenseComponent implements OnInit {

  expenses:any;
  totalAmount = this.calculateTotal();
  showEditForm = false;
  selectedExpense:Expense;
  constructor(private manageExpenseService:ManageExpenseService, private router:Router) { 
    this.expenses = this.manageExpenseService.getExpenses();
  }

  ngOnInit(): void {

  }

  calculateTotal(){
    var total = 0;
    this.manageExpenseService.getExpenses().forEach(element => {
      total+=element.amount;
    });
    return total
  }

  editAmount(expenseData){
    this.showEditForm = true;
    this.selectedExpense = expenseData;
  }
  goToAddExpense(){
    this.router.navigate(['/addExpense']);
  }
  isEventDone(event){
    if(event === true){
      this.showEditForm = false;
      this.totalAmount = this.calculateTotal();
    }
  }
}
