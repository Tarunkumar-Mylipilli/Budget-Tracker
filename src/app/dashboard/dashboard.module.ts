import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoTransactionsComponent } from './todo-transactions/todo-transactions.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SideNavComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoTransactionsComponent,
    AllTransactionsComponent,
    AddBudgetComponent,
    LoginComponent
  ]
})
export class DashboardModule { }
