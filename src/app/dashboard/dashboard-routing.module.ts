import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { IncomeComponent } from './income/income.component';
import { expenseComponent } from './expense/expense.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { TodoTransactionsComponent } from './todo-transactions/todo-transactions.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'all-transactions',component:AllTransactionsComponent},
  {path:'side-nav',component:SideNavComponent},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:expenseComponent},
  {path:'add-budget',component:AddBudgetComponent},
  {path:'todo-transactions',component:TodoTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
