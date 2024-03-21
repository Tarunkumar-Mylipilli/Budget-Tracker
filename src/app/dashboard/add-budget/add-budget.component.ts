import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-budget',
  standalone: true,
  imports: [SideNavComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './add-budget.component.html',
  styleUrl: './add-budget.component.css'
})
export class AddBudgetComponent  implements OnInit{
  budgetForm: FormGroup;
  budgets: any[] = [];
  selectedMonth: string = '';
  totalBudget: number = 0;
  editMode: boolean = false;
  editIndex: number = -1;

  constructor(private formBuilder: FormBuilder, public service: ServiceService,public router:Router) {
    this.budgetForm = this.formBuilder.group({
      month: ['', Validators.required],
      name: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBudgets();
  }
  

  loadBudgets(): void {
    // Load all budgets initially
    this.budgets = this.service.getAllBudgets();
    this.calculateTotalBudget();
  }

  calculateTotalBudget(): void {
    this.totalBudget = 0;
    for (const budget of this.budgets) {
      this.totalBudget += budget.amount;
    }
  }
  
  goBack(): void {
    this.router.navigate(['/dashboard/all-transactions']);}


  onSubmit() {
    if (this.budgetForm.valid) {
      const formValue = this.budgetForm.value;
      if (this.editMode) {
        this.budgets[this.editIndex] = formValue;
        this.editMode = false;
        this.editIndex = -1;
      } else {
        this.service.saveBudget(formValue);
      }
      this.loadBudgets();
      this.budgetForm.reset();
    }
  }

  onChangeMonth(): void {
    this.budgets = this.service.getBudgetsByMonth(this.selectedMonth);
    this.calculateTotalBudget();
  }

  editBudget(index: number) {
    const editedBudget = this.budgets[index];
    this.editMode = true;
    this.editIndex = index;

    this.budgetForm.patchValue({
      month: editedBudget.month,
      name: editedBudget.name,
      amount: editedBudget.amount,
    });
  }

  deleteBudget(index: number) {
    if (confirm('Are you sure you want to delete this budget?')) {
      this.service.deleteBudget(index);
      this.loadBudgets(); // Reload budgets after deletion
    }
  }


}