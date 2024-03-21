import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(public router:Router) {}
  
  addIncome(): void {
    debugger;
    this.router.navigate(['/dashboard/income']);}
    addExpense(): void {
      this.router.navigate(['/dashboard/expense'])}
  addBudget() : void {
    this.router.navigate(['./dashboard/add-budget'])}
    dashboard() : void {
      this.router.navigate(['./dashboard/all-transactions'])}
    

}
