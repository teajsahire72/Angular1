import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../Expense';
import { ManageExpenseService } from '../manage-expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  expenseAddForm: FormGroup;
  expense: Expense;

  constructor(private formBuilder: FormBuilder, private manageExpenseService:ManageExpenseService) {}

  ngOnInit(): void {
    this.expenseAddForm = this.formBuilder.group({
      expenseName: ['', Validators.required],
      date: ['', Validators.required],
      expenseCategory: ['', Validators.required],
      notes: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    this.expense = new Expense(
      this.expenseAddForm.get('expenseName').value,
      this.expenseAddForm.get('date').value,
      this.expenseAddForm.get('expenseCategory').value,
      this.expenseAddForm.get('notes').value,
      parseInt(this.expenseAddForm.get('amount').value)
    );
    this.manageExpenseService.setExpense(this.expense);
  }
}
