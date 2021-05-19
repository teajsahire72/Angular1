import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';

const routes: Routes = [
  {path:'viewExpense',component:ViewExpenseComponent},
  {path:'addExpense',component:AddExpenseComponent},
  {path:'', redirectTo:'/viewExpense',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
