import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { RegisterComponent } from './register.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}