import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default to dashboard
    { path: '**', redirectTo: '/dashboard' } // Handle 404
  ];
