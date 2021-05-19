import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Expense } from '../Expense';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  @Input() selectedExpense:Expense;
  @Output() notifyEditDone: EventEmitter<any> = new EventEmitter();

  constructor() { 
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.notifyEditDone.emit(true);
  };
}
